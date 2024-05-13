import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { GridRow } from '~/app/components'

cleanup()

describe('grid.row', () => {
  it('render', () => {
    const { getByTestId } = render(<GridRow>Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
  })

  it('span', () => {
    const { getByTestId } = render(<GridRow span={3}>Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('row-span-3')
  })

  it('span full', () => {
    const { getByTestId } = render(<GridRow span="full">Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('row-span-full')
  })

  it('span auto', () => {
    const { getByTestId } = render(<GridRow span="auto">Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('row-auto')
  })

  it('start', () => {
    const { getByTestId } = render(<GridRow start={3}>Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('row-start-3')
  })

  it('start auto', () => {
    const { getByTestId } = render(<GridRow start="auto">Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('row-start-auto')
  })

  it('end', () => {
    const { getByTestId } = render(<GridRow end={3}>Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('row-end-3')
  })

  it('end auto', () => {
    const { getByTestId } = render(<GridRow end="auto">Test</GridRow>)
    const el = getByTestId('grid.row')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('row-end-auto')
  })
})
