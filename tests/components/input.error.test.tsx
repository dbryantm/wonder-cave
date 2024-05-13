import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { InputError } from '~/app/components'

cleanup()

describe('input.error', () => {
  it('render', () => {
    const { getByTestId } = render(<InputError name="test" message={undefined} />)
    const el = getByTestId('input.error')

    expect(el.innerText).toEqual('')
  })

  it('message', () => {
    const { getByTestId } = render(<InputError name="test" message="Test" />)
    const el = getByTestId('input.error')

    expect(el.innerText).toEqual('Test')
  })
})
