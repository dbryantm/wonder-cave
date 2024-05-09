import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex gap-4 px-4 py-2')

export interface PaginationProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof variants> {}

export function Pagination({ className, children, ...props }: PaginationProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
