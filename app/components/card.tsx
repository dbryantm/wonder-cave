import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex flex-col gap-y-2 rounded bg-neutral-200 p-2 shadow-md dark:bg-neutral-600')

export interface CardProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cx(variants(), className)} {...props} data-testid="card">
      {children}
    </div>
  )
}
