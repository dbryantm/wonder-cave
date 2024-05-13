import { type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { db } from '~/app/db.server'
import { Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'View Contact | Wonder Cave' }]
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { uuid } = params
    const contact = await db.contact.findUnique({
      where: {
        uuid,
      },
    })

    return contact
  } catch (err) {
    throw new Error('We could not find the contact you were searching for...')
  }
}

export default function ContactViewRoute() {
  const contact = useLoaderData<typeof loader>()

  if (!contact) return null

  return (
    <>
      <h1 className="mb-4 text-2xl">View Contact</h1>
      <div className="mb-4">
        <strong>First Name</strong>
        <p>{contact.firstName}</p>
      </div>
      <div className="mb-4">
        <strong>Last Name</strong>
        <p>{contact.lastName}</p>
      </div>
      <div className="mb-4">
        <strong>Email</strong>
        <p>
          <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
        </p>
      </div>
      <div className="mb-4">
        <strong>Phone</strong>
        <p>
          <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
        </p>
      </div>
      <div className="flex gap-2">
        <Link to="/" button variant="secondary" outline>
          Cancel
        </Link>
      </div>
    </>
  )
}
