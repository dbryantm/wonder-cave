import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { parse } from 'valibot'
import db from '~/app/db.server'
import { createContactSchema } from '~/app/schemas'
import { Button, Header, Input, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }, { name: 'description', content: 'Wonder Cave - Phone Book' }]
}

export default function CreateMultipleContact() {
  return (
    <>
      <main className="p-4">
        <Header>
          <h1 className="text-4xl">Upload Contacts</h1>
        </Header>
        <hr className="m-4" />
        <Form className="form" action="/contact" method="post">
          <div className="mb-4">
            <Input type="file" name="uuid" />
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
