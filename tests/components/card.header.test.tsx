import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { CardHeader } from '~/app/components'

cleanup()

describe('card.header', () => {
  it('render', () => {
    const { getByTestId } = render(<CardHeader>Test</CardHeader>)
    const el = getByTestId('card.header')

    console.log(el.getAttribute('data-testid'))

    expect(el.innerText).toEqual('Test')
  })
})
