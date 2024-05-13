import z from 'zod'

export type Batch = z.infer<typeof batchSchema>

export const batchSchema = z.object({
  id: z.number(),
  uuid: z.string().uuid(),
  file: z.instanceof(Buffer),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const batchCreateSchema = batchSchema.omit({ id: true, createdAt: true, updatedAt: true })
