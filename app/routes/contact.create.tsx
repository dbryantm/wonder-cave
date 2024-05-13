import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { db } from '~/app/.server'
import { contactCreateSchema } from '~/app/schemas'
import { formatErrors, type FormError } from '~/app/helpers'
import { ContactForm } from '~/app/forms'

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
    const { data, error, success } = contactCreateSchema.safeParse(input)
    if (!success) {
      return formatErrors(error)
    }

    const exists = await db.contact.exists({
      email: data.email,
    })
    if (exists) {
      return [
        {
          path: 'email',
          message: 'This email already exists',
        },
      ]
    }

    await db.contact.create({ data })

    return redirect('/')
  } catch (err) {
    // handle error
  }
}

export default function ContactCreateRoute() {
  const errors = useActionData() as FormError[]

  return (
    <>
      <h1 className="text-2xl">Create Contact</h1>
      <p className="mb-4">Please use the form below to provide the information for your contact.</p>
      <ContactForm errors={errors} />
    </>
  )
}
