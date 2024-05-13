import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex flex-1 items-center')

export interface HeaderProps extends ComponentPropsWithRef<'header'>, VariantProps<typeof variants> {}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header className={cx(variants(), className)} {...props}>
      {children}
    </header>
  )
}
