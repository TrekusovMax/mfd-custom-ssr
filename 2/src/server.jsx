import { readFile } from 'fs/promises'
import { renderToPipeableStream } from 'react-dom/server'
import { App } from './App'
import http from 'http'

http
  .createServer(async (req, res) => {
    if (req.url === '/bundle.js') {
      const bundle = await readFile('./dist/bundle.js')
      res.writeHead(200, {
        'Content-Type': 'text/javascript',
      })
      res.end(bundle)
      return
    }
    const stream = renderToPipeableStream(<App />, {
      bootstrapScripts: ['bundle.js'],
      onShellReady: () => {
        stream.pipe(res)
      },
    })
    /* const template = await readFile('./index.html', 'utf-8')
    const html = renderToPipeableStream(<App />)

    res.writeHead(200, {
      'Content-Type': 'text/html',
    })

    res.end(
      template.replace('<div id="root"></div>', `<div id="root">${html}</div>`),
    ) */
  })
  .listen(3000)
