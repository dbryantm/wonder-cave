import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Grid } from '~/app/components'

describe('components.grid', () => {
  it('render', () => {
    const { getByText } = render(<Grid>Test</Grid>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('grid')
  })

  it('flow cols', () => {
    const { getByText } = render(<Grid flow="col">Test</Grid>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('grid-flow-cols')
  })

  it('flow rows', () => {
    const { getByText } = render(<Grid flow="row">Test</Grid>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('grid-flow-row')
  })

  it('gap', () => {
    const { getByText } = render(<Grid gap={3}>Test</Grid>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('gap-3')
  })

  it('cols', () => {
    const { getByText } = render(<Grid cols={3}>Test</Grid>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('grid-cols-3')
  })

  it('cols auto', () => {
    const { getByText } = render(<Grid cols="auto">Test</Grid>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
  })

  it('cols sm', () => {
    const { getByText } = render(
      <Grid cols="auto" colsSm={3}>
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('sm:grid-cols-3')
  })

  it('cols sm auto', () => {
    const { getByText } = render(
      <Grid cols="auto" colsSm="auto">
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('sm:cols-auto')
  })

  it('cols md', () => {
    const { getByText } = render(
      <Grid cols="auto" colsMd={3}>
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('md:grid-cols-3')
  })

  it('cols md auto', () => {
    const { getByText } = render(
      <Grid cols="auto" colsMd="auto">
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('md:cols-auto')
  })

  it('cols lg', () => {
    const { getByText } = render(
      <Grid cols="auto" colsLg={3}>
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('lg:grid-cols-3')
  })

  it('cols lg auto', () => {
    const { getByText } = render(
      <Grid cols="auto" colsLg="auto">
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('lg:cols-auto')
  })

  it('cols xl', () => {
    const { getByText } = render(
      <Grid cols="auto" colsXl={3}>
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('xl:grid-cols-3')
  })

  it('cols xl auto', () => {
    const { getByText } = render(
      <Grid cols="auto" colsXl="auto">
        Test
      </Grid>,
    )

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
    expect(el).toHaveClass('cols-auto')
    expect(el).toHaveClass('xl:cols-auto')
  })
})
