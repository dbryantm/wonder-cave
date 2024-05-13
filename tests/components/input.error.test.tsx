import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InputError } from '~/app/components'

describe('components.input.error', () => {
  it('render', () => {
    const { getByTestId } = render(<InputError name="test" message={undefined} data-testid="test" />)

    const el = getByTestId('test')

    expect(el.innerText).toEqual('')
  })

  it('message', () => {
    const { getByTestId } = render(<InputError name="test" message="Test" data-testid="test" />)

    const el = getByTestId('test')

    expect(el).toHaveTextContent('Test')
  })
})
