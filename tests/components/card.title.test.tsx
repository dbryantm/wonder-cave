import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { CardTitle } from '~/app/components'

cleanup()

describe('card.title', () => {
  it('render', () => {
    const { getByTestId } = render(<CardTitle>Test</CardTitle>)
    const el = getByTestId('card.title')

    expect(el.innerText).toEqual('Test')
  })
})
