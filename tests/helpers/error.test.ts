import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { formatErrors } from '~/app/helpers'

describe('helpers.error', () => {
  const testSchema = z.string().min(3, { message: 'Test error message' })

  it('should format errors from zod', () => {
    const { error, success } = testSchema.safeParse('')

    if (!success) {
      const errors = formatErrors(error)

      expect(errors).toEqual([{ path: '', message: 'Test error message' }])
    }
  })
})
