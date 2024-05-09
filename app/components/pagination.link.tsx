import { ComponentPropsWithRef } from 'react'
import { Link } from '@remix-run/react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface PaginationLinkProps
  extends ComponentPropsWithRef<'a'>,
    VariantProps<typeof variants> {
  to: {
    pathname: string
    search: string
  }
}

const variants = cva('')

export default function PaginationLink({
  className,
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <Link className={cx(variants(), className)} {...props}>
      {children}
    </Link>
  )
}
