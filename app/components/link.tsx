import { ComponentPropsWithRef } from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { type RemixLinkProps } from '@remix-run/react/dist/components'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type ButtonProps } from '~/app/components'

const variants = cva('', {
  variants: {
    button: {
      true: 'text-decoration-none inline-block rounded px-4 py-2 text-base',
    },
    variant: {
      primary: 'bg-blue-400 text-white hover:bg-blue-500',
      secondary: 'bg-white text-blue-400 outline-blue-400 hover:text-blue-500 hover:outline-blue-500',
      link: 'bg-transparent outline-blue-400 hover:bg-blue-500',
    },
  },
  defaultVariants: {
    button: false,
  },
})

export interface LinkProps
  extends ComponentPropsWithRef<'a'>,
    VariantProps<typeof variants>,
    Omit<RemixLinkProps, 'to'> {
  button?: boolean
  variant?: ButtonProps['variant']
  to?: RemixLinkProps['to']
}

export function Link({ button, className, children, href, to, variant, ...props }: LinkProps) {
  return href ? (
    <a href={href}>{children}</a>
  ) : (
    <RemixLink className={cx(variants({ button, variant }), className)} to={to ? to : ''} {...props} data-test="link">
      {children}
    </RemixLink>
  )
}
