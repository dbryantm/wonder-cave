export function uuid(o: object) {
  return btoa(JSON.stringify(o))
}
