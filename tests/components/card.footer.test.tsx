import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { CardFooter } from '~/app/components'

cleanup()

describe('card.footer', () => {
  it('render', () => {
    const { getByTestId } = render(<CardFooter>Test</CardFooter>)
    const el = getByTestId('card.footer')

    expect(el.innerText).toEqual('Test')
  })
})
