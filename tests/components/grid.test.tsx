import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { Grid } from '~/app/components'

cleanup()

describe('grid', () => {
  it('render', () => {
    const { getByTestId } = render(<Grid>Test</Grid>)
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('grid')
  })

  it('flow cols', () => {
    const { getByTestId } = render(<Grid flow="col">Test</Grid>)
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('grid-flow-cols')
  })

  it('flow rows', () => {
    const { getByTestId } = render(<Grid flow="row">Test</Grid>)
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('grid-flow-row')
  })

  it('gap', () => {
    const { getByTestId } = render(<Grid gap={3}>Test</Grid>)
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('gap-3')
  })

  it('cols', () => {
    const { getByTestId } = render(<Grid cols={3}>Test</Grid>)
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('grid-cols-3')
  })

  it('cols auto', () => {
    const { getByTestId } = render(<Grid cols="auto">Test</Grid>)
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
  })

  it('cols sm', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsSm={3}>
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('sm:grid-cols-3')
  })

  it('cols sm auto', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsSm="auto">
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('sm:cols-auto')
  })

  it('cols md', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsMd={3}>
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('md:grid-cols-3')
  })

  it('cols md auto', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsMd="auto">
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('md:cols-auto')
  })

  it('cols lg', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsLg={3}>
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('lg:grid-cols-3')
  })

  it('cols lg auto', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsLg="auto">
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('lg:cols-auto')
  })

  it('cols xl', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsXl={3}>
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('xl:grid-cols-3')
  })

  it('cols xl auto', () => {
    const { getByTestId } = render(
      <Grid cols="auto" colsXl="auto">
        Test
      </Grid>,
    )
    const el = getByTestId('grid')

    expect(el.innerText).toEqual('Test')
    expect(el.classList.toString()).toContain('cols-auto')
    expect(el.classList.toString()).toContain('xl:cols-auto')
  })
})
