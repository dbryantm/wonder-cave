import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from '~/app/components'

describe('components.pagination', () => {
  it('render', () => {
    const { getByText } = render(<Pagination>Test</Pagination>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })
})
