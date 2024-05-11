import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { v4 } from 'uuid'
import { parse } from 'valibot'
import db from '~/app/db.server'
import { createContactSchema } from '~/app/schemas'
import { Button, Header, Input, Link } from '~/app/components'

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
        <hr className="my-4" />
        <Form className="form" action="/contact" method="post">
          <Input type="hidden" name="uuid" defaultValue={uuid} />
          <div className="mb-4">
            <label className="block" htmlFor="firstName">
              <strong>First Name</strong>
            </label>
            <Input className="form-input" type="text" name="firstName" placeholder="First Name" />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="lastName">
              <strong>Last Name</strong>
            </label>
            <Input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="email">
              <strong>Email</strong>
            </label>
            <Input type="text" name="email" placeholder="first.last@email.com" />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="phone">
              <strong>Phone</strong>
            </label>
            <Input type="text" name="phone" maxLength={12} placeholder="123-456-7890" pattern="\d{3}-\d{3}-\d{4}" />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="photo">
              <strong>Photo</strong>
            </label>
            <Input type="text" name="photo" placeholder="https://i.pravatar.cc/300" />
          </div>
          <div className="flex gap-2">
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Link to="/" button variant="secondary" outline>
              Cancel
            </Link>
          </div>
        </Form>
      </main>
    </>
  )
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData()
  const input = {
    uuid: form.get('uuid') as string,
    firstName: form.get('firstName') as string,
    lastName: form.get('lastName') as string,
    email: form.get('email') as string,
    phone: (form.get('phone') as string).replace(new RegExp(/^(\d{3})-/i), '($1) '),
    photo: `${form.get('photo') as string}?id=${form.get('uuid') as string}`,
    createdAt: new Date(),
  }

  try {
    const data = parse(createContactSchema, input)
    await db.contact.create({ data })

    return redirect('/')
  } catch (err) {
    // handle error
  }
}
