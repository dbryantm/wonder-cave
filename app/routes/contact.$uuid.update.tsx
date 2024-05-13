import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'
import { db } from '~/app/db.server'
import { contactUpdateSchema, type Contact } from '~/app/schemas'
import { formatErrors, type FormError } from '~/app/helpers'
import { ContactForm } from '~/app/forms'

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
    const { data, error, success } = contactUpdateSchema.safeParse(input)
    if (!success) {
      return formatErrors(error)
    }

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
  const contact = useLoaderData<typeof loader>() as unknown as Contact
  const errors = useActionData<typeof action>() as FormError[]

  if (!contact) return null

  return (
    <>
      <h1 className="text-2xl">Update Contact</h1>
      <p className="mb-4">
        Please use the form below to update the information for{' '}
        <strong>{`${contact.firstName} ${contact.lastName}`}</strong>.
      </p>
      <ContactForm contact={contact} errors={errors} />
    </>
  )
}
