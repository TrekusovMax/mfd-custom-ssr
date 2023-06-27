import { readFile } from 'fs/promises'
import { renderToStaticMarkup } from 'react-dom/server'
import { App } from './App'
import http from 'http'

/* const app = express() */

http
  .createServer(async (req, res) => {
    const template = await readFile('./index.html', 'utf-8')
    const data = await App.getServerSideProps()
    const html = renderToStaticMarkup(<App data={data} />)

    res.writeHead(200, {
      'Content-Type': 'text/html',
    })

    res.end(
      template.replace('<div id="root"></div>', `<div id="root">${html}</div>`),
    )
  })
  .listen(3000)
/* 
app.use(express.static('./dist'))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
 */
