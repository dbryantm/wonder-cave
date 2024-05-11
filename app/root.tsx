import { useRouteError, Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import { Header } from '~/app/components'
import tailwind from '~/app/tailwind.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: tailwind }]

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)
  return (
    <html lang="en">
      <head>
        <title>Whoops...</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="p-4">
          <Header>
            <h1 className="text-4xl">Whoops...</h1>
          </Header>
          <hr className="my-4" />
          <p>There was an error, but please try again later.</p>
        </main>
        <Scripts />
      </body>
    </html>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-neutral-700 dark:text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
