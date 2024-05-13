import { ComponentPropsWithRef } from 'react'
import { Form } from '@remix-run/react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { v4 } from 'uuid'
import { Contact } from '~/app/schemas'
import { type FormError } from '~/app/helpers'
import { useErrors } from '~/app/hooks'
import { Button, Input, InputError, Label, Link } from '~/app/components'

const variants = cva('form')

export interface ContactFormProps extends ComponentPropsWithRef<'form'>, VariantProps<typeof variants> {
  contact?: Contact
  errors?: FormError[] | undefined
}

export function ContactForm({ className, contact, errors }: ContactFormProps) {
  const action = contact ? `/contact/${contact.uuid}/update` : `/contact/create`
  const uuid = v4()
  const error = useErrors(errors)

  return (
    <Form className={cx(variants(), className)} action={action} method="post" data-testid="contact.form">
      <Input type="hidden" name="uuid" defaultValue={contact ? contact.uuid : uuid} />
      <div className="mb-4">
        <Label className="block" htmlFor="firstName">
          <strong>First Name</strong>
        </Label>
        <Input
          className="form-input"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          defaultValue={contact ? contact.firstName : ''}
        />
        <InputError name="firstName" message={error('firstName')} />
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
          defaultValue={contact ? contact.lastName : ''}
        />
        <InputError name="lastName" message={error('lastName')} />
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
          defaultValue={contact ? contact.email : ''}
        />
        <InputError name="email" message={error('email')} />
      </div>
      <div className="mb-4">
        <Label className="block" htmlFor="phone">
          <strong>Phone</strong>
        </Label>
        <Input
          type="text"
          id="phone"
          name="phone"
          placeholder="123-456-7890"
          defaultValue={contact ? contact.phone : ''}
        />
        <InputError name="phone" message={error('phone')} />
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
