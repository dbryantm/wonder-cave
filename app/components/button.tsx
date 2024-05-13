import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('rounded', {
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    outline: false,
  },
  variants: {
    variant: {
      primary: '',
      secondary: '',
      tertiary: '',
      link: '',
      error: '',
    },
    outline: {
      true: 'border bg-white',
    },
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-4 py-2',
      lg: 'px-4 py-2 text-lg ',
    },
  },
  compoundVariants: [
    { variant: 'primary', outline: false, className: 'bg-sky-400 text-white hover:bg-sky-500' },
    { variant: 'secondary', outline: false, className: 'bg-teal-400 text-white hover:bg-teal-500' },
    { variant: 'tertiary', outline: false, className: 'bg-emerald-400 text-white hover:bg-emerald-500' },
    { variant: 'error', outline: false, className: 'bg-red-400 text-white hover:bg-red-500' },
    {
      variant: 'primary',
      outline: true,
      className: 'border-sky-400 text-sky-400 hover:border-sky-500 hover:text-sky-500',
    },
    {
      variant: 'secondary',
      outline: true,
      className: 'border-teal-400 text-teal-400 hover:border-teal-500 hover:text-teal-500',
    },
    {
      variant: 'tertiary',
      outline: true,
      className: 'border-emerald-400 text-emerald-400 hover:border-emerald-500 hover:text-emerald-500',
    },
    {
      variant: 'error',
      outline: true,
      className: 'border-red-400 text-red-400 hover:border-red-500 hover:text-red-500',
    },
  ],
})

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'link' | 'error'

export type ButtonSizes = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ComponentPropsWithRef<'button'>, VariantProps<typeof variants> {
  variant?: ButtonVariants
  size?: ButtonSizes
  outline?: boolean
}

export function Button({ className, children, variant, size, outline = false, ...props }: ButtonProps) {
  return (
    <button className={cx(variants({ variant, size, outline }), className)} {...props}>
      {children}
    </button>
  )
}
