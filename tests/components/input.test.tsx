import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input } from '~/app/components'

describe('components.input', () => {
  it('render', () => {
    const { getByPlaceholderText } = render(<Input id="test" name="test" placeholder="Test" defaultValue="Test" />)

    const el = getByPlaceholderText('Test')

    expect(el).toHaveAttribute('id', 'test')
    expect(el).toHaveAttribute('name', 'test')
    expect(el).toHaveAttribute('value', 'Test')
  })
})
