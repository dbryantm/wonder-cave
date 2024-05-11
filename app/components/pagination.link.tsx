import { Link, type LinkProps } from '~/app/components'
import { cva, cx } from 'class-variance-authority'

const variants = cva('text-xl hover:bg-sky-500')

export interface PaginationLinkProps extends LinkProps {}

export function PaginationLink(props: PaginationLinkProps) {
  return <Link button variant="link" className={cx(variants())} {...props} data-test="pagination.link"></Link>
}
