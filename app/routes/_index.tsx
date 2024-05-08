import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import db from '~/app/db.server'
import { Contact } from '~/app/schemas/contact'
import Header from '~/app/components/header'
import Nav from '~/app/components/nav'
import Pagination from '~/app/components/pagination'
import ContactList from '~/app/components/contact/list'

type IndexLoaderData = {
  contacts: Contact[]
  page: number
  pages: number
  limit: number
}

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }, { name: 'description', content: 'Wonder Cave - Phone Book' }]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page') || 1)
    const limit = Number(searchParams.get('limit') || process.env.PAGINATION_LIMIT)
    const contacts = await db.contact.findMany({ take: limit, skip: (page - 1) * limit })
    const totalContacts = await db.contact.count()

    return { contacts, page, pages: totalContacts / limit, limit }
  } catch (err) {
    return []
  }
}

export default function Index() {
  // This is such a weird issue to run into with remix
  // https://github.com/remix-run/remix/issues/7599
  const { contacts, ...pagination } = useLoaderData<typeof loader>() as unknown as IndexLoaderData

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main className="px-4">
        <ContactList contacts={contacts} />
        <Pagination {...pagination} />
      </main>
    </>
  )
}
