import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva(
  'form-input rounded border border-sky-400 text-black invalid:border-red-400 hover:border-sky-500 focus:outline-none active:border-sky-500',
  {
    variants: {
      error: {
        true: 'border-red-400',
      },
    },
  },
)

export interface InputProps extends ComponentPropsWithRef<'input'>, VariantProps<typeof variants> {
  error?: boolean
}

export function Input({ className, error, type = 'text', ...props }: InputProps) {
  return <input className={cx(variants({ error }), className)} type={type} {...props} data-testid="input" />
}
