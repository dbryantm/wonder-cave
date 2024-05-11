import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { parse } from 'valibot'
import { db, upload } from '~/app/.server'
import { contactUpsertSchema } from '~/app/schemas'
import { Button, Input, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Upload Contact(s) | Wonder Cave' }]
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData()
  const file = form.get('upload') as File
  const text = await file.text()

  console.log(text)

  try {
    return upload(text, async (rows) => {
      rows.forEach(async (row) => {
        const data = parse(contactUpsertSchema, row)

        await db.contact.createMany({
          data,
        })
      })

      return redirect('/')
    })
  } catch (err) {
    // handle error
  }
}

export default function ContactUploadRoute() {
  return (
    <>
      <h1 className="text-2xl">Upload Contact(s)</h1>
      <div className="mb-4">
        <p>Please select a file to upload multiple contacts.</p>
      </div>
      <Form className="form" action="/contact/upload" method="post" encType="multipart/form-data">
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
    </>
  )
}
