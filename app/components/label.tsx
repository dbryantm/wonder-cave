import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('')

export interface LabelProps extends ComponentPropsWithRef<'label'>, VariantProps<typeof variants> {}

export function Label({ className, children, ...props }: LabelProps) {
  return (
    <label className={cx(variants(), className)} {...props} data-test="label">
      {children}
    </label>
  )
}
