import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface CardTitleProps
  extends ComponentPropsWithRef<'h3'>,
    VariantProps<typeof variants> {}

const variants = cva('')

export default function CardTitle({
  className,
  children,
  ...props
}: CardTitleProps) {
  return (
    <h3 className={cx(variants(), className)} {...props}>
      {children}
    </h3>
  )
}
