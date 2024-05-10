import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex')

export interface GridColProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function GridCol({ className, children, ...props }: GridColProps) {
  return (
    <div className={cx(variants(), className)} {...props} data-test="card.header">
      {children}
    </div>
  )
}
