import { type MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { Header, Link } from '~/app/components'

export const meta: MetaFunction = () => {
  return [{ title: 'Wonder Cave' }]
}

export default function ContactRoute() {
  return (
    <>
      <Header className="border-b-[1px] p-4">
        <Link className="text-4xl text-white" to="/">
          <strong>Wonder</strong> Cave
        </Link>
      </Header>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  )
}
