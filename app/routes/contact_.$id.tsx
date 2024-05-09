import { type MetaFunction } from '@remix-run/node'
// import { Form } from '@remix-run/react'
// import db from '~/app/db.server'
// import { createContactSchema, Contact } from '~/app/schemas'
import { Header, Link, Nav } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }, { name: 'description', content: 'Wonder Cave - Phone Book' }]
}

export default function UpdateContact() {
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
          <h1 className="text-xl">Update Contact</h1>
        </div>
        {/* <Form></Form> */}
      </main>
    </>
  )
}

// export const action = async ({ request }: ActionFunctionArgs) => {}
