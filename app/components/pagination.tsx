import { useLocation, Link } from '@remix-run/react'
import { to } from '~/app/helpers/link'

export type PaginationProps = {
  page: number
  pages: number
  limit: number
}

export default function Pagination({ page, pages, limit }: PaginationProps) {
  const location = useLocation()

  return (
    <div className="flex justify-between px-4 py-2">
      <Link to={to(location, page - 1, limit)}>&lt;</Link>
      {[...Array(pages)].map((item, i) => (
        <Link key={i} to={to(location, i + 1, limit)}>
          {i + 1}
        </Link>
      ))}
      <Link to={to(location, page + 1, limit)}>&gt;</Link>
    </div>
  )
}
