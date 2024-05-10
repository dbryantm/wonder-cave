import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex flex-col py-2')

export interface CardContentProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cx(variants(), className)} {...props} data-test="card.content">
      {children}
    </div>
  )
}
