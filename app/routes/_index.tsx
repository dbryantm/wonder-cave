import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import db from '~/app/db.server'
import { Contact } from '~/app/schemas'
import { usePagination } from '~/app/hooks'
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Grid,
  Header,
  Link,
  Pagination,
  PaginationLink,
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
    const total = await db.contact.count()

    return { contacts, page, pages: Math.ceil(total / limit), limit }
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
      <main className="p-4">
        <Header>
          <h1 className="text-4xl">The Phone Book</h1>
          <div className="ml-auto flex gap-2">
            <Link to="/contact" button variant="primary">
              Create Contact
            </Link>
            <Button variant="secondary">Upload File</Button>
          </div>
        </Header>
        <hr className="m-4" />
        <Grid cols={3}>
          {contacts.map((contact) => (
            <Card key={contact.uuid}>
              <CardHeader>
                <Avatar src={contact.photo} alt={`Image for ${contact.firstName} ${contact.lastName}`} />
                <CardTitle>
                  <Link
                    className="text-2xl"
                    to={`/contact/${contact.uuid}`}
                  >{`${contact.firstName} ${contact.lastName}`}</Link>
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
              <CardFooter></CardFooter>
            </Card>
          ))}
        </Grid>
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
