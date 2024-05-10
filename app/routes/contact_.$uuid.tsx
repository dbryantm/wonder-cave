import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { parse } from 'valibot'
import db from '~/app/db.server'
import { updateContactSchema } from '~/app/schemas'
import { Button, Header, Input, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }, { name: 'description', content: 'Wonder Cave - Phone Book' }]
}

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const form = await request.formData()
  const { uuid } = params
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
    const data = parse(updateContactSchema, input)
    await db.contact.update({ data, where: { uuid } })

    return redirect(`/contact/${data.uuid}/update`)
  } catch (err) {
    // handle error
  }
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { uuid } = params
    const contact = await db.contact.findUnique({
      where: {
        uuid,
      },
    })

    return contact
  } catch (err) {
    return null
  }
}
export default function CreateContact() {
  const contact = useLoaderData<typeof loader>()

  return contact !== null ? (
    <>
      <main className="p-4">
        <Header>
          <h1 className="text-4xl">Update Contact</h1>
        </Header>
        <hr className="m-4" />
        <Form className="form" action="/contact" method="post">
          <Input type="hidden" name="uuid" defaultValue={contact.uuid} />
          <div className="mb-4">
            <label className="block" htmlFor="firstName">
              <strong>First Name</strong>
            </label>
            <Input
              className="form-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              defaultValue={contact.firstName}
            />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="lastName">
              <strong>Last Name</strong>
            </label>
            <Input type="text" name="lastName" placeholder="Last Name" defaultValue={contact.lastName} />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="email">
              <strong>Email</strong>
            </label>
            <Input type="text" name="email" placeholder="first.last@email.com" defaultValue={contact.email} />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="phone">
              <strong>Phone</strong>
            </label>
            <Input
              type="text"
              name="phone"
              maxLength={12}
              placeholder="123-456-7890"
              pattern="\d{3}-\d{3}-\d{4}"
              defaultValue={contact.phone}
            />
          </div>
          <div className="mb-4">
            <label className="block" htmlFor="photo">
              <strong>Photo</strong>
            </label>
            <Input type="text" name="photo" placeholder="https://i.pravatar.cc/300" defaultValue={contact.photo} />
          </div>
          <div className="flex gap-2">
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Link to="/" button variant="secondary">
              Cancel
            </Link>
          </div>
        </Form>
      </main>
    </>
  ) : (
    <>
      <p>Whoops</p>
    </>
  )
}
