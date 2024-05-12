import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData, Form } from '@remix-run/react'
import { db } from '~/app/.server'
import { contactUpsertSchema } from '~/app/schemas'
import { Button, Input, Label, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Update Contact | Wonder Cave' }]
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const form = await request.formData()
  const { uuid } = params
  const input = {
    uuid: form.get('uuid') as string,
    firstName: form.get('firstName') as string,
    lastName: form.get('lastName') as string,
    email: form.get('email') as string,
    phone: form.get('phone') as string,
  }

  try {
    const data = contactUpsertSchema.parse(input)
    await db.contact.update({ data, where: { uuid } })

    return redirect('/')
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
    throw new Error('We could not find the contact you were searching for...')
  }
}

export default function ContactUpdateRoute() {
  const contact = useLoaderData<typeof loader>()

  if (!contact) return null

  return (
    <>
      <h1 className="text-2xl">Update Contact</h1>
      <p className="mb-4">
        Please use the form below to update the information for{' '}
        <strong>{`${contact.firstName} ${contact.lastName}`}</strong>.
      </p>
      <Form className="form" action={`/contact/${contact.uuid}/update`} method="post">
        <Input type="hidden" name="uuid" defaultValue={contact.uuid} />
        <div className="mb-4">
          <Label className="block" htmlFor="firstName">
            <strong>First Name</strong>
          </Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            minLength={3}
            defaultValue={contact.firstName}
          />
        </div>
        <div className="mb-4">
          <Label className="block" htmlFor="lastName">
            <strong>Last Name</strong>
          </Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            minLength={3}
            defaultValue={contact.lastName}
          />
        </div>
        <div className="mb-4">
          <Label className="block" htmlFor="email">
            <strong>Email</strong>
          </Label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="first.last@email.com"
            minLength={3}
            defaultValue={contact.email}
          />
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
            defaultValue={contact.phone}
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
