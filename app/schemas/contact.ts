import { date, email, number, object, required, string, Input, omit } from 'valibot'

export type Contact = Input<typeof contactSchema>

export const contactSchema = required(
  object({
    id: number(),
    firstName: string(),
    lastName: string(),
    email: string([email()]),
    phone: string(),
    photo: string(),
    createdAt: date(),
    updatedAt: date(),
  }),
)

export const contactCreateSchema = omit(contactSchema, ['id', 'updatedAt'])

export const contactUpdateSchema = omit(contactSchema, ['id', 'createdAt', 'updatedAt'])
