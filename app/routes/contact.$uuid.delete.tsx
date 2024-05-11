import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { db } from '~/app/.server'
import { Button, Input, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Delete Contact | Wonder Cave' }]
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const { uuid } = params
  const form = await request.formData()

  try {
    if (uuid === form.get('uuid')) {
      await db.contact.delete({ where: { uuid } })

      return redirect(`/`)
    }
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

export default function ContactDeleteRoute() {
  const contact = useLoaderData<typeof loader>()

  if (!contact) return null

  return (
    <>
      <h1 className="text-2xl">Delete Contact</h1>
      <p className="mb-4">
        Are you sure you would like to delete <strong>{`${contact.firstName} ${contact.lastName}`}</strong>?
      </p>
      <Form className="form" action={`/contact/${contact.uuid}/delete`} method="post">
        <Input type="hidden" name="uuid" defaultValue={contact.uuid} />
        <div className="flex gap-2">
          <Button type="submit" variant="error">
            Confirm
          </Button>
          <Link to="/" button variant="secondary" outline>
            Cancel
          </Link>
        </div>
      </Form>
    </>
  )
}
