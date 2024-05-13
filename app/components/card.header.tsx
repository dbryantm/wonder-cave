import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('flex gap-2 border-b-[1px] border-neutral-400 pb-2 dark:border-neutral-400')

export interface CardHeaderProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof variants> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cx(variants(), className)} {...props} data-testid="card.header">
      {children}
    </div>
  )
}
