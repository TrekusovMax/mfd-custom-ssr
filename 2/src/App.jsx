import { Suspense, useState } from 'react'
import List from './List'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <html>
      <head>
        <title>Streaming API</title>
      </head>
      <body>
        <div>
          Count = {count}
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Click
          </button>
          <Suspense fallback="Loading...">
            <List />
          </Suspense>
        </div>
      </body>
    </html>
  )
}
