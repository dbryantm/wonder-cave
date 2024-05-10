import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex flex-1 flex-col')

export interface DropdownProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function Dropdown({ className, children, ...props }: DropdownProps) {
  return (
    <div className={cx(variants(), className)} {...props} data-test="dropdown">
      {children}
    </div>
  )
}
