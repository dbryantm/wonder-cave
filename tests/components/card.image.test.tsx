import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardImage } from '~/app/components'

describe('components.card.image', () => {
  it('render', () => {
    const { getByAltText } = render(<CardImage src="http://www.test.com/image.img" alt="Test image" />)

    const el = getByAltText('Test image')

    expect(el).toHaveAttribute('src', 'http://www.test.com/image.img')
    expect(el).toHaveAttribute('alt', 'Test image')
  })
})
