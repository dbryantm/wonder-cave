import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { Pagination } from '~/app/components'

cleanup()

describe('pagination', () => {
  it('render', () => {
    const { getByTestId } = render(<Pagination>Test</Pagination>)
    const el = getByTestId('pagination')

    expect(el.innerText).toEqual('Test')
  })
})
