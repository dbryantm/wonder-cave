import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex flex-col')

export interface CardContentProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
