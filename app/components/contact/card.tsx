import { Contact } from '~/app/schemas/contact'

export type ContactCardProps = {
  contact: Contact
}

export default function Card({ contact }: ContactCardProps) {
  return <div>{contact.id}</div>
}
