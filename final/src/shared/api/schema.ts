import { z } from 'zod'

export const CreateEventSchema = z.object({
  title: z.string().min(1, 'Введите название'),
  description: z.string().optional(),
  date: z.coerce.date(),
})
