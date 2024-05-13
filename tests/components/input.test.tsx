import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { Input } from '~/app/components'

cleanup()

describe('input', () => {
  it('render', () => {
    const { getByTestId } = render(<Input defaultValue="Test" />)
    const el = getByTestId('input')

    expect(el.getAttribute('value')).toEqual('Test')
  })
})
