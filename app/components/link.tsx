import { ComponentPropsWithRef } from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { type RemixLinkProps } from '@remix-run/react/dist/components'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const variants = cva('', {
  variants: {
    button: {
      true: 'rounded text-base p-1',
    },
    variant: {
      primary: 'text-white bg-blue-400',
      secondary: 'text-blue-400 dark:bg-white border border-blue-400',
    },
  },
  defaultVariants: {
    button: false,
  },
})

export interface LinkProps
  extends ComponentPropsWithRef<'a'>,
    VariantProps<typeof variants>,
    RemixLinkProps {
  button?: boolean
  variant?: 'primary' | 'secondary'
}

export function Link({ button, className, children, variant, ...props }: LinkProps) {
  return (
    <RemixLink className={cx(variants({ button, variant }), className)} {...props}>
      {children}
    </RemixLink>
  )
}
