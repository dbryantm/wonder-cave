import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from '~/app/components'

describe('components.header', () => {
  it('render', () => {
    const { getByTestId } = render(<Header data-testid="test">Test</Header>)

    const el = getByTestId('test')

    expect(el).toHaveTextContent('Test')
  })
})
