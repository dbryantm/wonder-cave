import { ComponentPropsWithRef } from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { type RemixLinkProps } from '@remix-run/react/dist/components'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface LinkProps
  extends ComponentPropsWithRef<'a'>,
    VariantProps<typeof variants>,
    RemixLinkProps {}

const variants = cva('text-blue-400')

export default function Link({ className, children, ...props }: LinkProps) {
  return (
    <RemixLink className={cx(variants(), className)} {...props}>
      {children}
    </RemixLink>
  )
}
