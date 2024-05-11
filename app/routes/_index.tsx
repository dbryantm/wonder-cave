import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { db } from '~/app/.server'
import { usePagination } from '~/app/hooks'
import { type Contact } from '~/app/schemas'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Grid,
  GridCol,
  Header,
  Link,
  Pagination,
  PaginationLink,
} from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave | Phone Book' }, { name: 'description', content: 'Phone Book for Wonder Cave' }]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page') || 1)
  const limit = Number(searchParams.get('limit') || process.env.PAGINATION_LIMIT)
  const offset = (page - 1) * limit
  const pages = 0

  try {
    const contacts: Contact[] = await db.$queryRaw<
      Contact[]
    >`SELECT c.* FROM contact c ORDER BY c.lastName ASC, c.firstName ASC LIMIT ${limit} OFFSET ${offset}`

    const total = await db.contact.count()
    const pages = Math.ceil(total / limit)

    return { contacts, page, pages, limit }
  } catch (err) {
    return { contacts: [], page, pages, limit }
  }
}

export default function IndexRoute() {
  // This is such a weird issue between Remix and TypeScript
  // https://github.com/remix-run/remix/issues/7599
  const { contacts, ...pagination } = useLoaderData<typeof loader>()
  const links = usePagination(pagination)

  return (
    <>
      <Header className="border-b-[1px] p-4">
        <Link className="text-4xl text-white" to="/">
          <strong>Wonder</strong> Cave
        </Link>
        <div className="ml-auto flex gap-2">
          <Link to="/contact/create" button variant="primary">
            Create Contact
          </Link>
          <Link to="/contact/upload" button variant="secondary" outline>
            Upload Contacts
          </Link>
        </div>
      </Header>
      <main className="p-4">
        <Grid cols={3}>
          {contacts.map((contact) => (
            <GridCol key={contact.uuid}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <Link to={`/contact/${contact.uuid}`}>{`${contact.firstName} ${contact.lastName}`}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <strong className="text-sm">Email</strong>
                    <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
                  </div>
                  <p className="flex items-center gap-2">
                    <strong className="text-sm">Phone</strong>
                    <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to={`/contact/${contact.uuid}/update`} button size="sm" variant="primary">
                    Update
                  </Link>
                  <Link to={`/contact/${contact.uuid}/delete`} button size="sm" variant="error" outline>
                    Delete
                  </Link>
                </CardFooter>
              </Card>
            </GridCol>
          ))}
        </Grid>
        <Pagination>
          {links.map(({ text, first, last, ...link }, i) => (
            <PaginationLink key={`pagination-${i}`} {...link}>
              {first ? <>&laquo;</> : null}
              {!first && !last ? <>{text}</> : null}
              {last ? <>&raquo;</> : null}
            </PaginationLink>
          ))}
        </Pagination>
      </main>
    </>
  )
}
