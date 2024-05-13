import { z } from 'zod'

export interface FormError {
  path: string
  message: string
}

export function formatErrors(error: z.ZodError): FormError[] {
  return error.issues.map((issue) => {
    return {
      path: issue.path.join(', '),
      message: issue.message,
    }
  })
}
