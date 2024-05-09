import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface CardImageProps
  extends ComponentPropsWithRef<'img'>,
    VariantProps<typeof variants> {
  alt: string
}

const variants = cva(
  'h-[4.688rem] w-[4.688rem] bg-neutral-100 dark:bg-neutral-700',
)

export default function CardImage({
  alt,
  className,
  ...props
}: CardImageProps) {
  return (
    <div className={cx(variants(), className)}>
      <img {...props} alt={alt} />
    </div>
  )
}
