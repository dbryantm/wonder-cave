import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('text-2xl bg-neutral-200 dark:bg-neutral-800 mb-2 px-4 py-2', {
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

export interface HeaderProps
  extends ComponentPropsWithRef<'header'>,
    VariantProps<typeof variants> {
  shadow?: 'sm' | 'md' | 'lg'
}

export function Header({ className, children, shadow = 'md', ...props }: HeaderProps) {
  return (
    <header className={cx(variants({ shadow }), className)} {...props}>
      {children}
    </header>
  )
}
