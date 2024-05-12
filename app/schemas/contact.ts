import z from 'zod'

export type Contact = z.infer<typeof contactSchema>

export const contactSchema = z.object({
  id: z.number(),
  uuid: z.string().uuid(),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  phone: z.string().max(12),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const contactUpsertSchema = contactSchema.omit({ id: true, createdAt: true, updatedAt: true })
