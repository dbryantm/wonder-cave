import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex')

export interface GridRowProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function GridRow({ className, children, ...props }: GridRowProps) {
  return (
    <div className={cx(variants(), className)} {...props} data-test="card.header">
      {children}
    </div>
  )
}
