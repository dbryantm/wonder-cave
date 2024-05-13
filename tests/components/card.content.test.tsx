import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardContent } from '~/app/components'

describe('components.card.content', () => {
  it('render', () => {
    const { getByText } = render(<CardContent>Test</CardContent>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })
})
