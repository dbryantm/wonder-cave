import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex')

export interface CardFooterProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={cx(variants(), className)} {...props} data-test="card.header">
      {children}
    </div>
  )
}
