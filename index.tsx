function fill<T>(array: Array<any>, value: T): Array<T>  {
  return array.map(() => value)
}

const result = fill([1,2,3,], 'a')