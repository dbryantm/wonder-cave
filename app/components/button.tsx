import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva(['rounded'], {
  variants: {
    variant: {
      primary: 'bg-blue-400 text-white hover:bg-blue-500',
      secondary: 'border bg-white text-blue-400 outline-blue-400 hover:text-blue-500 hover:outline-blue-500',
      link: 'bg-white text-blue-400 outline-blue-400 hover:text-blue-500 hover:outline-blue-500',
      warning: 'bg-red-400 text-white hover:bg-red-500',
    },
    size: {
      sm: 'px-1 py-2 text-sm',
      md: 'px-4 py-2 ',
      lg: 'px-4 py-2 text-lg ',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentPropsWithRef<'button'>, VariantProps<typeof variants> {
  variant?: 'primary' | 'secondary' | 'link' | 'warning'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ className, children, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cx(variants({ variant, size }), className)} {...props} data-test="button">
      {children}
    </button>
  )
}
