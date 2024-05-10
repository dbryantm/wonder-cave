import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva(['rounded px-4 py-2 text-base'], {
  variants: {
    variant: {
      primary: 'bg-blue-400 text-white hover:bg-blue-500',
      secondary: 'border bg-white text-blue-400 outline-blue-400 hover:text-blue-500 hover:outline-blue-500',
      link: 'bg-white text-blue-400 outline-blue-400 hover:text-blue-500 hover:outline-blue-500',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentPropsWithRef<'button'>, VariantProps<typeof variants> {
  variant?: 'primary' | 'secondary' | 'link'
}

export function Button({ className, children, variant, ...props }: ButtonProps) {
  return (
    <button className={cx(variants({ variant }), className)} {...props} data-test="button">
      {children}
    </button>
  )
}
