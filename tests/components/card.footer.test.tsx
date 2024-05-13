import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardFooter } from '~/app/components'

describe('components.card.footer', () => {
  it('render', () => {
    const { getByText } = render(<CardFooter>Test</CardFooter>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })
})
