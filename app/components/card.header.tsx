import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface CardHeaderProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof variants> {}

const variants = cva('')

export default function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
