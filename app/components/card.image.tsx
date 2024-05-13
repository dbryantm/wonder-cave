import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('h-[100%] w-[100px] rounded-full bg-neutral-100 dark:bg-neutral-600')

export interface CardImageProps extends ComponentPropsWithRef<'img'>, VariantProps<typeof variants> {
  alt: string
}

export function CardImage({ alt, className, ...props }: CardImageProps) {
  return (
    <div className={cx(variants(), className)}>
      <img className="rounded-full" {...props} alt={alt} data-testid="card.image" />
    </div>
  )
}
