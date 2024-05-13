import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GridCol } from '~/app/components'

describe('components.grid.col', () => {
  it('render', () => {
    const { getByText } = render(<GridCol>Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })

  it('span', () => {
    const { getByText } = render(<GridCol span={3}>Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('col-span-3')
  })

  it('span full', () => {
    const { getByText } = render(<GridCol span="full">Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('col-span-full')
  })

  it('span auto', () => {
    const { getByText } = render(<GridCol span="auto">Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('col-auto')
  })

  it('start', () => {
    const { getByText } = render(<GridCol start={3}>Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('col-start-3')
  })

  it('start auto', () => {
    const { getByText } = render(<GridCol start="auto">Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('col-start-auto')
  })

  it('end', () => {
    const { getByText } = render(<GridCol end={3}>Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('col-end-3')
  })

  it('end auto', () => {
    const { getByText } = render(<GridCol end="auto">Test</GridCol>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('col-end-auto')
  })
})
