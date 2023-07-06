import { z } from 'zod'
import { prisma } from '../db'
import { isAuth, procedure, router } from '../trpc'
import { CreateEventSchema } from '@/shared/api'

export const eventRouter = router({
  findMany: procedure.query(() => {
    return prisma.event.findMany()
  }),
  create: procedure
    .input(CreateEventSchema)
    .use(isAuth)
    .mutation(async ({ input, ctx: { user } }) => {
      return prisma.event.create({
        data: { authorId: user.id, ...input },
      })
    }),
})
