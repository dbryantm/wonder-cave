import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex')

export interface NavProps extends ComponentPropsWithRef<'nav'>, VariantProps<typeof variants> {}

export function Nav({ className, children, ...props }: NavProps) {
  return (
    <nav className={cx(variants(), className)} {...props}>
      {children}
    </nav>
  )
}
