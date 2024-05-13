import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('block pt-2 text-sm text-red-400')

export interface InputErrorProps extends ComponentPropsWithRef<'span'>, VariantProps<typeof variants> {
  name: string
  message?: string
}

export function InputError({ className, message: message, ...props }: InputErrorProps) {
  return (
    <span className={cx(variants(), className)} {...props}>
      {message !== undefined ? message : null}
    </span>
  )
}
