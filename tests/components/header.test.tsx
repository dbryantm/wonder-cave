import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { Header } from '~/app/components'

cleanup()

describe('header', () => {
  it('render', () => {
    const { getByTestId } = render(<Header>Test</Header>)
    const el = getByTestId('header')

    expect(el.innerText).toEqual('Test')
  })
})
