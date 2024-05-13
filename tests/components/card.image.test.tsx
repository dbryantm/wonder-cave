import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { CardImage } from '~/app/components'

cleanup()

describe('card.image', () => {
  it('render', () => {
    const { getByTestId } = render(<CardImage src="http://www.test.com/image.img" alt="Test image" />)
    const el = getByTestId('card.image')

    expect(el.getAttribute('src')).toEqual('http://www.test.com/image.img')
    expect(el.getAttribute('alt')).toEqual('Test image')
  })
})
