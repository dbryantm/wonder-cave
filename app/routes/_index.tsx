import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import db from '~/app/db.server'
import { Contact } from '~/app/schemas'
import { usePagination } from '~/app/hooks'
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  Header,
  Link,
  List,
  Nav,
  Pagination,
} from '~/app/components'

interface IndexLoaderData {
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
    const contacts = await db.contact.findMany({
      take: limit,
      skip: (page - 1) * limit,
    })
    const totalContacts = await db.contact.count()

    return { contacts, page, pages: totalContacts / limit, limit }
  } catch (err) {
    return []
  }
}

export default function Index() {
  // This is such a weird issue between Remix and TypeScript
  // https://github.com/remix-run/remix/issues/7599
  const { contacts, ...pagination } = useLoaderData<typeof loader>() as unknown as IndexLoaderData
  const links = usePagination(pagination)

  return (
    <>
      <Header>
        <Nav>
          <Link to="/">
            <strong>Wonder</strong> Cave
          </Link>
        </Nav>
      </Header>
      <main className="px-4">
        <div className="mb-4 flex flex-1 flex-row items-center justify-between">
          <h1 className="text-xl">Contacts</h1>
          <div className="flex gap-2">
            <Link to="/contact" button variant="primary">
              Create Contact
            </Link>
            <Button variant="secondary">Upload File</Button>
          </div>
        </div>
        <List>
          {contacts.map((contact) => (
            <Card key={contact.uuid}>
              <CardImage
                src={contact.photo}
                alt={`Image for ${contact.firstName} ${contact.lastName}`}
              />
              <CardBody>
                <CardTitle>
                  <Link
                    to={`/contact/${contact.uuid}`}
                  >{`${contact.firstName} ${contact.lastName}`}</Link>
                  <hr />
                </CardTitle>
                <ul>
                  <li>
                    <strong>Email</strong> {contact.email}
                  </li>
                  <li>
                    <strong>Phone</strong> {contact.phone}
                  </li>
                </ul>
              </CardBody>
            </Card>
          ))}
        </List>
        <Pagination>
          {links.map(({ text, first, last, ...link }, i) => (
            <Link key={`pagination-${i}`} {...link}>
              {first ? <>&lt; First</> : null}
              {!first && !last ? <>{text}</> : null}
              {last ? <>Last &gt;</> : null}
            </Link>
          ))}
        </Pagination>
      </main>
    </>
  )
}
