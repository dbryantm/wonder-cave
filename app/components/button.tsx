import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('rounded h-10 px-4 py-2', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground',
      outline: 'border border-input bg-background',
      secondary: 'bg-secondary text-secondary-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ComponentPropsWithRef<'button'>,
    VariantProps<typeof variants> {}

export default function Button({
  className,
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button className={cx(variants({ variant }), className)} {...props}>
      {children}
    </button>
  )
}
