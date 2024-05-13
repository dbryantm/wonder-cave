import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { GridCol } from '~/app/components'

cleanup()

describe('grid.col', () => {
  it('render', () => {
    const { getByTestId } = render(<GridCol>Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
  })

  it('span', () => {
    const { getByTestId } = render(<GridCol span={3}>Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('col-span-3')
  })

  it('span full', () => {
    const { getByTestId } = render(<GridCol span="full">Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('col-span-full')
  })

  it('span auto', () => {
    const { getByTestId } = render(<GridCol span="auto">Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('col-auto')
  })

  it('start', () => {
    const { getByTestId } = render(<GridCol start={3}>Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('col-start-3')
  })

  it('start auto', () => {
    const { getByTestId } = render(<GridCol start="auto">Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('col-start-auto')
  })

  it('end', () => {
    const { getByTestId } = render(<GridCol end={3}>Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('col-end-3')
  })

  it('end auto', () => {
    const { getByTestId } = render(<GridCol end="auto">Test</GridCol>)
    const el = getByTestId('grid.col')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('col-end-auto')
  })
})
