import type { AppProps } from 'next/app'
import { trpc } from '@/shared/api'

import '../app/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <Component {...pageProps} />
    </div>
  )
}

export default trpc.withTRPC(App)
