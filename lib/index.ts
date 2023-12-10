export * from './date'
export * from './passwords'

export function returnError(error: any) {
  return error.map((err: any) => err.message)
}
