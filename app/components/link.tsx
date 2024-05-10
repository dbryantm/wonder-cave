import { ComponentPropsWithRef } from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { type RemixLinkProps } from '@remix-run/react/dist/components'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type ButtonProps } from '~/app/components'

const variants = cva('', {
  variants: {
    button: {
      true: 'text-decoration-none inline-block rounded text-base',
    },
    variant: {
      primary: 'bg-blue-400 text-white hover:bg-blue-500',
      secondary: 'bg-white text-blue-400 outline-blue-400 hover:text-blue-500 hover:outline-blue-500',
      link: 'bg-transparent outline-blue-400 hover:bg-blue-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  compoundVariants: [
    { button: true, size: 'sm', className: 'px-1 py-1' },
    { button: true, size: 'md', className: 'px-2 py-1' },
    { button: true, size: 'lg', className: 'px-4 py-2' },
  ],
  defaultVariants: {
    button: false,
    size: 'md',
  },
})

export interface LinkProps
  extends ComponentPropsWithRef<'a'>,
    VariantProps<typeof variants>,
    Omit<RemixLinkProps, 'to'> {
  button?: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  to?: RemixLinkProps['to']
}

export function Link({ button, className, children, href, to, variant, size, ...props }: LinkProps) {
  return href ? (
    <a href={href}>{children}</a>
  ) : (
    <RemixLink
      className={cx(variants({ button, variant, size }), className)}
      to={to ? to : ''}
      {...props}
      data-test="link"
    >
      {children}
    </RemixLink>
  )
}
