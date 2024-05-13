import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('text-2xl')

export interface CardTitleProps extends ComponentPropsWithRef<'h3'>, VariantProps<typeof variants> {}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3 className={cx(variants(), className)} {...props} data-testid="card.title">
      {children}
    </h3>
  )
}
