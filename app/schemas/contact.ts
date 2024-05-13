import z from 'zod'

export type Contact = z.infer<typeof contactSchema>

export const contactSchema = z.object({
  id: z.number(),
  batchId: z.number().optional(),
  uuid: z.string().uuid(),
  firstName: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  lastName: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  email: z.string().email(),
  phone: z
    .string()
    .length(12, { message: 'Must be 12 characters long' })
    .regex(new RegExp(/\d{3}-\d{3}-\d{4}/), 'Please enter using the 111-234-5678 format'),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const contactCreateSchema = contactSchema.omit({ id: true, createdAt: true, updatedAt: true })

export const contactUpdateSchema = contactSchema.omit({ id: true, createdAt: true, updatedAt: true })

export const contactUploadSchema = z.object({
  upload: z.string().min(3, 'File is required'),
})
