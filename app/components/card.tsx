import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface CardProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

const variants = cva('flex flex-row items-start justify-center gap-4 border-1 shadow-md p-2 mb-2')

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
