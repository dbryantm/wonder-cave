import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex flex-col justify-around text-sm')

export interface CardBodyProps
  extends ComponentPropsWithRef<'div'>,
    VariantProps<typeof variants> {}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cx(variants(), className)} {...props}>
      {children}
    </div>
  )
}
