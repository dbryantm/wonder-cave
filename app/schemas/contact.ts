import { date, email, number, object, required, string, Input, omit } from 'valibot'

export type Contact = Input<typeof contactSchema>

export const contactSchema = required(
  object({
    id: number(),
    uuid: string(),
    firstName: string(),
    lastName: string(),
    email: string([email()]),
    phone: string(),
    createdAt: date(),
    updatedAt: date(),
  }),
)

export const contactUpsertSchema = omit(contactSchema, ['id', 'createdAt', 'updatedAt'])
