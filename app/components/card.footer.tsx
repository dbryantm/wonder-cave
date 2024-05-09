import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface CardFooterProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof variants> {}

const variants = cva('')

export default function CardFooter({
  className,
  children,
  ...props
}: CardFooterProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
