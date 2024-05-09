import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import db from '~/app/db.server'
import usePagination from '~/app/hooks/pagination'
import { Contact } from '~/app/schemas/contact'
import Header from '~/app/components/header'
import Nav from '~/app/components/nav'
import List from '~/app/components/list'
import Card from '~/app/components/card'
import Pagination from '~/app/components/pagination'
import PaginationLink from '~/app/components/pagination.link'
import CardHeader from '../components/card.header'
import CardImage from '../components/card.image'
import CardTitle from '../components/card.title'
import CardBody from '../components/card.body'
import { uuid } from '../helpers/uuid'

type IndexLoaderData = {
  contacts: Contact[]
  page: number
  pages: number
  limit: number
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Wonder Cave' },
    { name: 'description', content: 'Wonder Cave - Phone Book' },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page') || 1)
    const limit = Number(
      searchParams.get('limit') || process.env.PAGINATION_LIMIT,
    )
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
  const { contacts, ...pagination } = useLoaderData<
    typeof loader
  >() as unknown as IndexLoaderData
  const links = usePagination(pagination)

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main className="px-4">
        <List>
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <CardImage
                src={`https://i.pravatar.cc/75?${uuid(contact)}`}
                alt={`Image for ${contact.firstName} ${contact.lastName}`}
              />
              <CardHeader>
                <CardTitle>
                  {`${contact.firstName} ${contact.lastName}`}
                </CardTitle>
                <CardBody>
                  <ul>
                    <li>
                      <strong>Email</strong> {contact.email}
                    </li>
                    <li>
                      <strong>Phone</strong> {contact.phone}
                    </li>
                  </ul>
                </CardBody>
              </CardHeader>
            </Card>
          ))}
        </List>
        <Pagination>
          {links.map(({ text, first, last, ...link }, i) => (
            <PaginationLink key={`pagination-${i}`} {...link}>
              {first ? <>&lt; First</> : null}
              {!first && !last ? <>{text}</> : null}
              {last ? <>Last &gt;</> : null}
            </PaginationLink>
          ))}
        </Pagination>
      </main>
    </>
  )
}
