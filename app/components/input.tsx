import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('form-input text-black')

export interface InputProps extends ComponentPropsWithRef<'input'>, VariantProps<typeof variants> {}

export function Input({ className, type = 'text', ...props }: InputProps) {
  return <input className={cx(variants(), className)} type={type} {...props} data-test="input" />
}
