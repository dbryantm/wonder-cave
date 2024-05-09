import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface HeaderProps
  extends ComponentPropsWithRef<'header'>,
    VariantProps<typeof variants> {
  shadow?: 'sm' | 'md' | 'lg'
}

const variants = cva('mb-4 px-4 py-2', {
  variants: {
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  defaultVariants: {
    shadow: 'md',
  },
})

export default function Header({
  className,
  children,
  shadow = 'md',
  ...props
}: HeaderProps) {
  return (
    <header className={cx(variants({ shadow }), className)} {...props}>
      {children}
    </header>
  )
}
