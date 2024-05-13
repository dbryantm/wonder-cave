import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from '~/app/components'

describe('components.card', () => {
  it('render', () => {
    const { getByText } = render(<Card>Test</Card>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })
})
