import { ComponentPropsWithRef } from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('w-[100%] max-w-[30px] rounded bg-neutral-100 dark:bg-neutral-600')

export interface AvatarProps extends ComponentPropsWithRef<'img'>, VariantProps<typeof variants> {
  alt: string
}

export function Avatar({ alt, className, ...props }: AvatarProps) {
  return <img className={cx(variants(), className)} {...props} alt={alt} data-test="avatar" />
}
