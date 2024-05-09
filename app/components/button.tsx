import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('rounded text-base p-1', {
  variants: {
    variant: {
      primary: 'text-white bg-blue-400',
      secondary: 'text-blue-400 dark:bg-white border border-blue-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ComponentPropsWithRef<'button'>,
    VariantProps<typeof variants> {}

export function Button({ className, children, variant, ...props }: ButtonProps) {
  return (
    <button className={cx(variants({ variant }), className)} {...props}>
      {children}
    </button>
  )
}
