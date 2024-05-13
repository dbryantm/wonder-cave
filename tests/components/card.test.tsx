import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { Card } from '~/app/components'

cleanup()

describe('card', () => {
  it('render', () => {
    const { getByTestId } = render(<Card>Test</Card>)
    const el = getByTestId('card')

    expect(el.innerText).toEqual('Test')
  })
})
