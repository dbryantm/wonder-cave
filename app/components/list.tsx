import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex flex-1 flex-col')

export interface ListProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function List({ className, children, ...props }: ListProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
