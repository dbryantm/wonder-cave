import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardHeader } from '~/app/components'

describe('components.card.header', () => {
  it('render', () => {
    const { getByText } = render(<CardHeader>Test</CardHeader>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })
})
