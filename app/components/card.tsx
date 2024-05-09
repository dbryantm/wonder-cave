import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex gap-4 border-1 shadow-md py-2 mb-2')

export interface CardProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
