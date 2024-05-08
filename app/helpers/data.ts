type PickType = {
  [key: string]: string
}

export function pick(obj: PickType, ...props: string[]) {
  return props.reduce(function (result: PickType, prop: string) {
    result[prop] = obj[prop]
    return result
  }, {})
}

export function pickArray(arr: PickType[], ...props: string[]) {
  return arr.map((obj) => pick(obj, ...props))
}

type OmitType = {
  [key: string]: string
}

export function omit(obj: OmitType, ...props: string[]) {
  const result = { ...obj }
  props.forEach(function (prop) {
    delete result[prop]
  })
  return result
}

export function omitArray(arr: OmitType[], ...props: string[]) {
  return arr.map((obj) => omit(obj, ...props))
}
