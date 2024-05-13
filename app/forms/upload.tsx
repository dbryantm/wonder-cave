import { ComponentPropsWithRef } from 'react'
import { Form } from '@remix-run/react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type FormError } from '~/app/helpers'
import { useErrors } from '~/app/hooks'
import { Button, Input, InputError, Link } from '~/app/components'

const variants = cva('form')

export interface UploadFormProps extends ComponentPropsWithRef<'form'>, VariantProps<typeof variants> {
  errors?: FormError[] | undefined
}

export function UploadForm({ className, errors }: UploadFormProps) {
  const error = useErrors(errors)

  return (
    <Form className={cx(variants(), className)} action="/contact/upload" method="post" encType="multipart/form-data">
      <div className="mb-4">
        <Input className="rounded border-none bg-transparent p-0 text-current" name="upload" type="file" />
        <InputError name="upload" message={error('upload')} />
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
  )
}
