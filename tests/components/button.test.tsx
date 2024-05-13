import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import cleanup from '~/tests'
import { Button } from '~/app/components'

cleanup()

describe('button', () => {
  it('render', () => {
    const { getByTestId } = render(<Button>Test</Button>)
    const el = getByTestId('button')

    expect(el.innerText).toEqual('Test')
  })

  it('sm', () => {
    const { getByTestId } = render(<Button size="sm">Test</Button>)
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('text-sm')
  })

  it('lg', () => {
    const { getByTestId } = render(<Button size="lg">Test</Button>)
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('text-lg')
  })

  it('primary', () => {
    const { getByTestId } = render(<Button variant="primary">Test</Button>)
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('bg-sky-400')
    expect(el.classList.toString()).toContain('hover:bg-sky-500')
  })

  it('secondary', () => {
    const { getByTestId } = render(<Button variant="secondary">Test</Button>)
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('bg-teal-400')
    expect(el.classList.toString()).toContain('hover:bg-teal-500')
  })

  it('tertiary', () => {
    const { getByTestId } = render(<Button variant="tertiary">Test</Button>)
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('bg-emerald-400')
    expect(el.classList.toString()).toContain('hover:bg-emerald-500')
  })

  it('error', () => {
    const { getByTestId } = render(<Button variant="error">Test</Button>)
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('bg-red-400')
    expect(el.classList.toString()).toContain('hover:bg-red-500')
  })

  it('primary outline', () => {
    const { getByTestId } = render(
      <Button variant="primary" outline>
        Test
      </Button>,
    )
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('border-sky-400')
    expect(el.classList.toString()).toContain('hover:border-sky-500')
  })

  it('secondary outline', () => {
    const { getByTestId } = render(
      <Button variant="secondary" outline>
        Test
      </Button>,
    )
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('border-teal-400')
    expect(el.classList.toString()).toContain('hover:border-teal-500')
  })

  it('tertiary outline', () => {
    const { getByTestId } = render(
      <Button variant="tertiary" outline>
        Test
      </Button>,
    )
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('border-emerald-400')
    expect(el.classList.toString()).toContain('hover:border-emerald-500')
  })

  it('error outline', () => {
    const { getByTestId } = render(
      <Button variant="error" outline>
        Test
      </Button>,
    )
    const el = getByTestId('button')

    expect(el.classList.toString()).toContain('border-red-400')
    expect(el.classList.toString()).toContain('hover:border-red-500')
  })
})
