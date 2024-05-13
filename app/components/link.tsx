import { ComponentPropsWithRef } from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { type RemixLinkProps } from '@remix-run/react/dist/components'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type ButtonSizes, type ButtonVariants } from '~/app/components'

const variants = cva('', {
  defaultVariants: {
    button: false,
    size: 'md',
    variant: 'primary',
    outline: false,
  },
  variants: {
    button: {
      true: 'text-decoration-none inline-block rounded',
    },
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
      sm: 'text-sm',
      md: '',
      lg: 'text-lg ',
    },
  },
  compoundVariants: [
    { button: true, size: 'sm', className: 'px-4 py-2' },
    { button: true, size: 'md', className: 'px-4 py-2' },
    { button: true, size: 'lg', className: 'px-4 py-2' },
    { button: true, variant: 'primary', outline: false, className: 'bg-sky-400 text-white hover:bg-sky-500' },
    { button: true, variant: 'secondary', outline: false, className: 'bg-teal-400 text-white hover:bg-teal-500' },
    { button: true, variant: 'tertiary', outline: false, className: 'bg-emerald-400 text-white hover:bg-emerald-500' },
    { button: true, variant: 'error', outline: false, className: 'bg-red-400 text-white hover:bg-red-500' },
    {
      button: true,
      variant: 'primary',
      outline: true,
      className: 'border-sky-400 text-sky-400 hover:border-sky-500 hover:text-sky-500',
    },
    {
      button: true,
      variant: 'secondary',
      outline: true,
      className: 'border-teal-400 text-teal-400 hover:border-teal-500 hover:text-teal-500',
    },
    {
      button: true,
      variant: 'tertiary',
      outline: true,
      className: 'border-emerald-400 text-emerald-400 hover:border-emerald-500 hover:text-emerald-500',
    },
    {
      button: true,
      variant: 'error',
      outline: true,
      className: 'border-red-400 text-red-400 hover:border-red-500 hover:text-red-500',
    },
    { button: false, variant: 'primary', outline: false, className: 'text-sky-400 hover:text-sky-500' },
    { button: false, variant: 'secondary', outline: false, className: 'text-teal-400 hover:text-teal-500' },
    { button: false, variant: 'tertiary', outline: false, className: 'text-emerald-400 hover:text-emerald-500' },
    { button: false, variant: 'error', outline: false, className: 'text-red-400 hover:text-red-500' },
  ],
})

export interface LinkProps
  extends ComponentPropsWithRef<'a'>,
    VariantProps<typeof variants>,
    Omit<RemixLinkProps, 'to'> {
  button?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  outline?: boolean
  to?: RemixLinkProps['to']
}

export function Link({ button, className, children, href, to, variant, size, outline, ...props }: LinkProps) {
  return href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <RemixLink className={cx(variants({ button, variant, size, outline }), className)} to={to ? to : ''} {...props}>
      {children}
    </RemixLink>
  )
}
