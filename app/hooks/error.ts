import { type FormError } from '~/app/helpers'

export function useErrors(errors: FormError[] | undefined) {
  return (path: string) => {
    if (!errors) return undefined

    const errorsMap = new Map(
      errors.map((e: FormError) => {
        return [e.path, e.message]
      }),
    )

    return errorsMap.get(path)
  }
}
