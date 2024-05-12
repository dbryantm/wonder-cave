import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { v4 } from 'uuid'
import { db } from '~/app/.server'
import { contactUpsertSchema } from '~/app/schemas'
import { Button, Input, Label, Link } from '~/app/components'

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
  }

  try {
    const data = contactUpsertSchema.parse(input)
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
          <Label className="block" htmlFor="firstName">
            <strong>First Name</strong>
          </Label>
          <Input
            className="form-input"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            minLength={3}
          />
        </div>
        <div className="mb-4">
          <Label className="block" htmlFor="lastName">
            <strong>Last Name</strong>
          </Label>
          <Input type="text" id="lastName" name="lastName" minLength={3} placeholder="Last Name" />
        </div>
        <div className="mb-4">
          <Label className="block" htmlFor="email">
            <strong>Email</strong>
          </Label>
          <Input type="text" id="email" name="email" minLength={3} placeholder="first.last@email.com" />
        </div>
        <div className="mb-4">
          <Label className="block" htmlFor="phone">
            <strong>Phone</strong>
          </Label>
          <Input
            type="text"
            id="phone"
            name="phone"
            minLength={12}
            maxLength={12}
            placeholder="123-456-7890"
            pattern="\d{3}-\d{3}-\d{4}"
          />
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
