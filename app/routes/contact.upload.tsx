import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { v4 } from 'uuid'
import { db, uploadFile } from '~/app/.server'
import { batchCreateSchema, contactCreateSchema, contactUploadSchema } from '~/app/schemas'
import { formatErrors, type FormError } from '~/app/helpers'
import { UploadForm } from '~/app/forms'

export const meta: MetaFunction = () => {
  return [{ title: 'Upload Contact(s) | Wonder Cave' }]
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData()
  const upload = form.get('upload') as File
  const file = await upload.text()

  const { data, error, success } = contactUploadSchema.safeParse({ upload: file })
  if (!success) {
    return formatErrors(error)
  }

  try {
    if (data.upload !== '') {
      const fileBuffer = await upload.arrayBuffer()
      const batchData = {
        uuid: v4(),
        file: Buffer.from(fileBuffer),
      }

      batchCreateSchema.parse(batchData)
      const batch = await db.batch.create({
        data: {
          uuid: v4(),
          file: Buffer.from(fileBuffer),
        },
      })

      if (batch) {
        return uploadFile(data.upload, async (rows) => {
          rows.forEach(async (row) => {
            contactCreateSchema.parse({
              ...row,
              uuid: v4(),
            })

            await db.contact.upsert({
              create: {
                ...row,
                batchId: batch.id,
                uuid: v4(),
              },
              update: {
                ...row,
              },
              where: {
                email: row.email,
              },
            })
          })

          return redirect('/')
        })
      }
    }
  } catch (err) {
    // handle error
  }

  return null
}

export default function ContactUploadRoute() {
  const errors = useActionData<typeof action>() as unknown as FormError[]

  return (
    <>
      <h1 className="text-2xl">Upload Contact(s)</h1>
      <div className="mb-4">
        <p>Please select a file to upload multiple contacts.</p>
      </div>
      <UploadForm errors={errors} />
    </>
  )
}
