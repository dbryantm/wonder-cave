import { ComponentPropsWithRef } from 'react'
import { Link } from '@remix-run/react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

export interface NavProps extends ComponentPropsWithRef<'nav'>, VariantProps<typeof variants> {}

const variants = cva('')

export default function Nav({ className, ...props }: NavProps) {
  return (
    <nav className={cx(variants(), className)} {...props}>
      <Link className="text-xl" to="/">
        <strong>Wonder</strong> Cave
      </Link>
    </nav>
  )
}
