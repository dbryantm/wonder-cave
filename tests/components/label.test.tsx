import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { Label } from '~/app/components'

cleanup()

describe('label', () => {
  it('render', () => {
    const { getByTestId } = render(<Label htmlFor="test">Test</Label>)
    const el = getByTestId('label')

    expect(el.getAttribute('for')).toEqual('test')
    expect(el.innerText).toEqual('Test')
  })
})
