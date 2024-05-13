import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '~/app/components'

describe('components.button', () => {
  it('render', () => {
    const { getByText } = render(<Button>Test</Button>)

    const el = getByText('Test')

    expect(el).toHaveTextContent('Test')
  })

  it('sm', () => {
    const { getByText } = render(<Button size="sm">Test</Button>)

    const el = getByText('Test')

    expect(el).toHaveClass('text-sm')
  })

  it('lg', () => {
    const { getByText } = render(<Button size="lg">Test</Button>)

    const el = getByText('Test')

    expect(el).toHaveClass('text-lg')
  })

  it('primary', () => {
    const { getByText } = render(<Button variant="primary">Test</Button>)

    const el = getByText('Test')

    expect(el).toHaveClass('bg-sky-400')
    expect(el).toHaveClass('hover:bg-sky-500')
  })

  it('secondary', () => {
    const { getByText } = render(<Button variant="secondary">Test</Button>)

    const el = getByText('Test')

    expect(el).toHaveClass('bg-teal-400')
    expect(el).toHaveClass('hover:bg-teal-500')
  })

  it('tertiary', () => {
    const { getByText } = render(<Button variant="tertiary">Test</Button>)

    const el = getByText('Test')

    expect(el).toHaveClass('bg-emerald-400')
    expect(el).toHaveClass('hover:bg-emerald-500')
  })

  it('error', () => {
    const { getByText } = render(<Button variant="error">Test</Button>)

    const el = getByText('Test')

    expect(el).toHaveClass('bg-red-400')
    expect(el).toHaveClass('hover:bg-red-500')
  })

  it('primary outline', () => {
    const { getByText } = render(
      <Button variant="primary" outline>
        Test
      </Button>,
    )

    const el = getByText('Test')

    expect(el).toHaveClass('border-sky-400')
    expect(el).toHaveClass('hover:border-sky-500')
  })

  it('secondary outline', () => {
    const { getByText } = render(
      <Button variant="secondary" outline>
        Test
      </Button>,
    )

    const el = getByText('Test')

    expect(el).toHaveClass('border-teal-400')
    expect(el).toHaveClass('hover:border-teal-500')
  })

  it('tertiary outline', () => {
    const { getByText } = render(
      <Button variant="tertiary" outline>
        Test
      </Button>,
    )

    const el = getByText('Test')

    expect(el).toHaveClass('border-emerald-400')
    expect(el).toHaveClass('hover:border-emerald-500')
  })

  it('error outline', () => {
    const { getByText } = render(
      <Button variant="error" outline>
        Test
      </Button>,
    )

    const el = getByText('Test')

    expect(el).toHaveClass('border-red-400')
    expect(el).toHaveClass('hover:border-red-500')
  })
})
