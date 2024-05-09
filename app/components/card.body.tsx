import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface CardBodyProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof variants> {}

const variants = cva('flex flex-col flex-1')

export default function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}