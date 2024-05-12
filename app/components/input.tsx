import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva(
  'form-input rounded border border-sky-400 text-black invalid:border-red-400 hover:border-sky-500 focus:outline-none active:border-sky-500',
)

export interface InputProps extends ComponentPropsWithRef<'input'>, VariantProps<typeof variants> {}

export function Input({ className, type = 'text', ...props }: InputProps) {
  return <input className={cx(variants(), className)} type={type} {...props} data-test="input" />
}
