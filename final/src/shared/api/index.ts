import { AppRouter } from '@/server/routers'
import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

import superjson from 'superjson'

function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''

  /* if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}` */

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
  config(opts) {
    const { ctx } = opts
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        transformer: superjson, // optional - adds superjson serialization
        links: [
          httpBatchLink({
            url: '/api/trpc',
          }),
        ],
      }
    }

    return {
      transformer: superjson, // optional - adds superjson serialization
      links: [
        httpBatchLink({
          // The server needs to know your app's full url
          url: `${getBaseUrl()}/api/trpc`,

          headers() {
            if (!ctx?.req?.headers) {
              return {}
            }
            // To use SSR properly, you need to forward client headers to the server
            // This is so you can pass through things like cookies when we're server-side rendering
            return {
              cookie: ctx.req.headers.cookie,
            }
          },
        }),
      ],
    }
  },
  ssr: true,
})

export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>

export * from './schema'
