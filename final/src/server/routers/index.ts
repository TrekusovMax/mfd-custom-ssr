import { router } from '../trpc'
import { eventRouter } from './event'

export const appRouter = router({
  event: eventRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
