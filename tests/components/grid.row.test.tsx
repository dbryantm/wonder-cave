import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GridRow } from '~/app/components'

describe('components.grid.row', () => {
  it('render', () => {
    const { getByText } = render(<GridRow>Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })

  it('span', () => {
    const { getByText } = render(<GridRow span={3}>Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('row-span-3')
  })

  it('span full', () => {
    const { getByText } = render(<GridRow span="full">Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('row-span-full')
  })

  it('span auto', () => {
    const { getByText } = render(<GridRow span="auto">Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('row-auto')
  })

  it('start', () => {
    const { getByText } = render(<GridRow start={3}>Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('row-start-3')
  })

  it('start auto', () => {
    const { getByText } = render(<GridRow start="auto">Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('row-start-auto')
  })

  it('end', () => {
    const { getByText } = render(<GridRow end={3}>Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('row-end-3')
  })

  it('end auto', () => {
    const { getByText } = render(<GridRow end="auto">Test</GridRow>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('row-end-auto')
  })
})
