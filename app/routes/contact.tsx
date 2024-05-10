import { type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { v4 } from 'uuid'
// import db from '~/app/db.server'
// import { createContactSchema, Contact } from '~/app/schemas'
import { Button, Header, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }, { name: 'description', content: 'Wonder Cave - Phone Book' }]
}

export default function CreateContact() {
  const uuid = v4()

  return (
    <>
      <main className="p-4">
        <Header>
          <h1 className="text-4xl">Create Contact</h1>
        </Header>
        <hr className="m-4" />
        <Form className="form" action="/contact" method="post">
          <input type="hidden" name="uuid" defaultValue={uuid} />
          <div className="flex gap-4">
            <label htmlFor="firstName">First Name</label>
            <input className="text-black" type="text" name="firstName" />
          </div>
          <div className="flex gap-4">
            <label htmlFor="lastName">Last Name</label>
            <input className="text-black" type="text" name="lastName" />
          </div>
          <div className="flex gap-4">
            <label htmlFor="email">Email</label>
            <input className="text-black" type="text" name="email" />
          </div>
          <div className="flex gap-4">
            <label htmlFor="phone">Phone</label>
            <input className="text-black" type="text" name="phone" maxLength={12} pattern="\d{3}-\d{3}-\d{4}" />
          </div>
          <div>
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Link to="/"></Link>
          </div>
        </Form>
      </main>
    </>
  )
}

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log(request)
}
