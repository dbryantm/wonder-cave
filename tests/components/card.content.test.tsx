import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { CardContent } from '~/app/components'

cleanup()

describe('card.content', () => {
  it('render', () => {
    const { getByTestId } = render(<CardContent>Test</CardContent>)
    const el = getByTestId('card.content')

    expect(el.innerText).toEqual('Test')
  })
})
