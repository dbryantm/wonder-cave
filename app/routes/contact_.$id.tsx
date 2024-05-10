import { type MetaFunction } from '@remix-run/node'
// import { Form } from '@remix-run/react'
// import db from '~/app/db.server'
// import { createContactSchema, Contact } from '~/app/schemas'
import { Header } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }, { name: 'description', content: 'Wonder Cave - Phone Book' }]
}

export default function UpdateContact() {
  return (
    <>
      <main className="px-4">
        <Header>
          <h1 className="text-xl">Update Contact</h1>
        </Header>
        {/* <Form></Form> */}
      </main>
    </>
  )
}

// export const action = async ({ request }: ActionFunctionArgs) => {}
