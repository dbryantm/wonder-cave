import { Contact } from '~/app/schemas/contact'
import ContactCard from '~/app/components/contact/card'

export type ContactListProps = {
  contacts: Contact[]
}

export default function List({ contacts }: ContactListProps) {
  return (
    <div className="flex flex-1 flex-col">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  )
}
