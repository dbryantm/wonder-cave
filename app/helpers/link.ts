import { Location } from '@remix-run/react'

export function to(location: Location, page: number, limit: number) {
  return {
    pathname: location.pathname,
    search: `?page=${page}&limit=${limit}`,
  }
}
