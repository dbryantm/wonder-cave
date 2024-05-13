import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Label } from '~/app/components'

describe('components.label', () => {
  it('render', () => {
    const { getByText } = render(<Label htmlFor="test">Test</Label>)

    const el = getByText('Test')

    expect(el).toHaveAttribute('for', 'test')
    expect(el).toHaveTextContent('Test')
  })
})
