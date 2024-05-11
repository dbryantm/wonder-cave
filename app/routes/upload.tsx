import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
// import { parse } from 'valibot'
// import db from '~/app/db.server'
// import { createContactSchema } from '~/app/schemas'
import { Button, Header, Input, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }, { name: 'description', content: 'Wonder Cave - Phone Book' }]
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData()
  const upload = form.get('upload')
  console.log(upload)
  // const input = {
  //   uuid: form.get('uuid') as string,
  //   firstName: form.get('firstName') as string,
  //   lastName: form.get('lastName') as string,
  //   email: form.get('email') as string,
  //   phone: form.get('phone') as string,
  //   photo: `${form.get('photo') as string}?id=${form.get('uuid') as string}`,
  // }

  try {
    // await db.contact.update({ data, where: { uuid } })

    return redirect('/')
  } catch (err) {
    // handle error
  }
}

export default function Upload() {
  return (
    <>
      <main className="p-4">
        <Header>
          <h1 className="text-4xl">Upload Contacts</h1>
        </Header>
        <hr className="my-4" />
        <Form className="form" action="/upload" method="post" encType="multipart/form-data">
          <div className="mb-4">
            <p>Please select a file to upload multiple contacts.</p>
          </div>
          <div className="mb-4">
            <Input className="rounded border-none bg-transparent p-0 text-current" name="upload" type="file" />
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
