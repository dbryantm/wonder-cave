import { ComponentPropsWithoutRef } from 'react'
import { Link } from '@remix-run/react'

export type NavProps = ComponentPropsWithoutRef<'nav'>

export default function Nav(props: NavProps) {
  return (
    <nav {...props}>
      <Link className="text-xl" to="/">
        <strong>Wonder</strong> Cave
      </Link>
    </nav>
  )
}
