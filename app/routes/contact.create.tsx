import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { v4 } from 'uuid'
import { parse } from 'valibot'
import { db } from '~/app/.server'
import { contactUpsertSchema } from '~/app/schemas'
import { Button, Input, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Create Contact | Wonder Cave' }]
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData()
  const input = {
    uuid: form.get('uuid') as string,
    firstName: form.get('firstName') as string,
    lastName: form.get('lastName') as string,
    email: form.get('email') as string,
    phone: form.get('phone') as string,
    createdAt: new Date(),
  }

  try {
    const data = parse(contactUpsertSchema, input)
    await db.contact.create({ data })

    return redirect('/')
  } catch (err) {
    // handle error
  }
}

export default function ContactCreateRoute() {
  const uuid = v4()

  return (
    <>
      <h1 className="text-2xl">Create Contact</h1>
      <p className="mb-4">Please use the form below to provide the information for your contact.</p>
      <Form className="form" action="/contact/create" method="post">
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
        <div className="flex gap-2">
          <Button type="submit" variant="primary">
            Submit
          </Button>
          <Link to="/" button variant="secondary" outline>
            Cancel
          </Link>
        </div>
      </Form>
    </>
  )
}
