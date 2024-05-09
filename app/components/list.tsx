import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface ListProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

const variants = cva('flex flex-1 flex-col')

export default function List({ className, children, ...props }: ListProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
