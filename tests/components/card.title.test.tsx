import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardTitle } from '~/app/components'

describe('components.card.title', () => {
  it('render', () => {
    const { getByText } = render(<CardTitle>Test</CardTitle>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })
})
