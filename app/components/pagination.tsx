import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface PaginationProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof variants> {}

const variants = cva('flex gap-4 px-4 py-2')

export default function Pagination({ className, children, ...props }: PaginationProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
