import { useLocation } from '@remix-run/react'

interface UsePaginationHook {
  pages: number
  page: number
  limit: number
}

interface PaginationLink {
  text: string
  to: {
    pathname: string
    search: string
  }
  first?: boolean
  last?: boolean
  disabled?: boolean
}

export default function usePagination({
  pages,
  page,
  limit,
}: UsePaginationHook) {
  const location = useLocation()
  const link = (i: number, special: 'first' | 'last' | null = null) => {
    return {
      text: i.toString(),
      to: {
        pathname: location.pathname,
        search: `?page=${i}&limit=${limit}`,
      },
      first: special === 'first',
      last: special === 'last',
      disabled:
        (special === 'first' && i === 1) ||
        (special === 'last' && i === pages) ||
        i === page,
    }
  }
  const links: PaginationLink[] = []

  for (let i = 1; i <= pages; i++) {
    switch (true) {
      case i === 1:
        links.push(...[link(i, 'first'), link(i)])
        break
      case i === pages:
        links.push(...[link(i), link(i, 'last')])
        break
      default:
        links.push(...[link(i)])
        break
    }
  }

  return links
}
