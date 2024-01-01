/**
 * @module ObjectExtensions
 *
 */
declare global {
  /**
   * @interface ObjectConstructor
   */
  interface ObjectConstructor {
    /**
     * Returns a flat map of a multi-dimensional object with, or without, type
     * definitions of the value.
     *
     * @param {infer} o
     * Object.
     *
     * @param {boolean} options.types
     * If false, will return only the value with each object key, instead of an array that contains the value with the type definition of the value.
     *
     * @example
     * // returns [
     * //   { name: [ 'John', 'string' ] },
     * //   { age: [ 42, 'number' ] },
     * //   { 'children.0.name': [ 'Mary', 'string' ] },
     * //   { 'children.0.age': [ 18, 'number' ] },
     * //   { 'children.1.name': [ 'Nicholas', 'string' ] },
     * //   { 'children.1.age': [ 11, 'number' ] },
     * //   { 'children.2.name': [ 'Adam', 'string' ] },
     * //   { 'children.2.age': [ 21, 'number' ] },
     * //   { 'letters.0': [ 'a', 'string' ] },
     * //   { 'letters.1': [ 'd', 'string' ] },
     * //   { 'letters.2': [ 'z', 'string' ] },
     * //   { 'letters.3': [ 'c', 'string' ] },
     * //   { 'numbers.0': [ 9, 'number' ] },
     * //   { 'numbers.1': [ 1, 'number' ] },
     * //   { 'numbers.3': [ 4, 'number' ] }
     * // ]
     * Object.flatMap({
     *   name: 'John',
     *   age: 42,
     *   single: false,
     *   children: [
     *   { name: 'Mary', age: 18 },
     *   { name: 'Nicholas', age: 11 },
     *   { name: 'Adam', age: 21 }
     *   ],
     *   letters: [ 'a', 'd', 'z', 'c' ],
     *   numbers: [ 9, 1, 0, 4 ]
     * })
     *
     * @example
     * // returns [
     * //   { name: 'John' },
     * //   { age: 42 },
     * //   { 'children.0.name': 'Mary' },
     * //   { 'children.0.age': 18 },
     * //   { 'children.1.name': 'Nicholas' },
     * //   { 'children.1.age': 11 },
     * //   { 'children.2.name': 'Adam' },
     * //   { 'children.2.age': 21 },
     * //   { 'letters.0': 'a' },
     * //   { 'letters.1': 'd' },
     * //   { 'letters.2': 'z' },
     * //   { 'letters.3': 'c' },
     * //   { 'numbers.0': 9 },
     * //   { 'numbers.1': 1 },
     * //   { 'numbers.3': 4 }
     * // ]
     * Object.flatMap({
     *   name: 'John',
     *   age: 42,
     *   single: false,
     *   children: [
     *   { name: 'Mary', age: 18 },
     *   { name: 'Nicholas', age: 11 },
     *   { name: 'Adam', age: 21 }
     *   ],
     *   letters: [ 'a', 'd', 'z', 'c' ],
     *   numbers: [ 9, 1, 0, 4 ]
     * }, {types: false})
     */
    flatMap<T>(
      o: T,
      options?: {
        types?: boolean
      }
    ): {[key: string]: string | [value: string, type: string]}[]

    /**
     * Return true if the length of Object.keys() is 0.
     *
     * @param {infer} o
     * Object.
     *
     * @example
     * // returns true
     * Object.isEmpty({})
     */
    isEmpty<T>(o: T): boolean

    /**
     * Returns an object with sorted keys.
     *
     * @param {infer} o
     * Object.
     *
     * @param {boolean} options.descending
     * If true, will sort object keys in descending order.
     *
     * @param {boolean} options.recursive
     * If true, will recursively sort any nested objects/arrays.
     *
     * @param {string} options.property
     * If provided, will sort arrays of objects by the specified property.
     *
     * @example
     * // returns {
     * //   age: 42,
     * //   children: [
     * //     { name: 'Mary', age: 18 },
     * //     { name: 'Nicholas', age: 11 },
     * //     { name: 'Adam', age: 21 }
     * //   ],
     * //   letters: [ 'a', 'd', 'z', 'c' ],
     * //   name: 'John',
     * //   numbers: [ 9, 1, 0, 4 ],
     * //   single: false
     * // }
     * Object.sort({
     *   name: 'John',
     *   age: 42,
     *   single: false,
     *   children: [
     *   { name: 'Mary', age: 18 },
     *   { name: 'Nicholas', age: 11 },
     *   { name: 'Adam', age: 21 }
     *   ],
     *   letters: [ 'a', 'd', 'z', 'c' ],
     *   numbers: [ 9, 1, 0, 4 ]
     * })
     *
     * @example
     * // returns {
     * //   age: 42,
     * //   children: [
     * //     { age: 11, name: 'Nicholas' },
     * //     { age: 18, name: 'Mary' },
     * //     { age: 21, name: 'Adam' }
     * //   ],
     * //   letters: [ 'a', 'c', 'd', 'z' ],
     * //   name: 'John',
     * //   numbers: [ 0, 1, 4, 9 ],
     * //   single: false
     * // }
     * Object.sort({
     *   name: 'John',
     *   age: 42,
     *   single: false,
     *   children: [
     *   { name: 'Mary', age: 18 },
     *   { name: 'Nicholas', age: 11 },
     *   { name: 'Adam', age: 21 }
     *   ],
     *   letters: [ 'a', 'd', 'z', 'c' ],
     *   numbers: [ 9, 1, 0, 4 ]
     * }, {recursive: true, property: 'age'})
     */
    sort<T>(
      o: T,
      options?: {
        descending?: boolean
        recursive?: boolean
        property?: string
      }
    ): T
  }
}

Object.flatMap = function <T>(
  o: T,
  options?: {
    types?: boolean
  }
): {[key: string]: string | [value: string, type: string]}[] {
  const _flatMap = (
    _o: T,
    _options?: {
      parentKey?: string
      types?: boolean
    }
  ): {[key: string]: string | [value: string, type: string]}[] => {
    let result: {[key: string]: string | [value: string, type: string]}[] = []

    for (const key of this.keys(_o as object) as (keyof T)[]) {
      if (_o[key]) {
        const currentKey = _options?.parentKey
          ? _options.parentKey.concat('.').concat(key as string)
          : (key as string)

        if (
          typeof _o[key] === 'object' &&
          this.keys(_o[key] as object).length
        ) {
          result = result.concat(
            _flatMap(_o[key] as T, {
              parentKey: currentKey,
              types: _options?.types
            })
          )
        } else {
          const flat: {[key: string]: string | [value: string, type: string]} =
            {}

          flat[currentKey] =
            _options?.types !== false
              ? [_o[key] as string, typeof _o[key]]
              : (_o[key] as string)

          result.push(flat)
        }
      }
    }

    return result
  }

  return _flatMap(o, options)
}

Object.isEmpty = function <T>(o: T): boolean {
  return this.keys(o as object).length === 0
}

Object.sort = function <T>(
  o: T,
  options?: {
    descending?: boolean
    recursive?: boolean
    property?: string
  }
): T {
  const result = {} as T

  for (const key of this.keys(o as object).sort((a, b) => {
    return options?.descending ? b.localeCompare(a) : a.localeCompare(b)
  }) as (keyof T)[]) {
    if (options?.recursive && typeof o[key] === 'object') {
      if (Array.isArray(o[key])) {
        const sortedArray = this.values(o[key] as object).sort((a, b) => {
          a =
            options?.property && a[options.property] ? a[options.property] : a
          b =
            options?.property && b[options.property] ? b[options.property] : b
          return typeof a === 'string' && typeof b === 'string'
            ? options?.descending
              ? b.localeCompare(a)
              : a.localeCompare(b)
            : options?.descending
              ? b - a
              : a - b
        })

        result[key] = sortedArray.map(x =>
          typeof x === 'object' ? this.sort(x, options) : x
        ) as T[keyof T]
      } else result[key] = this.sort(o[key], options)
    } else result[key] = o[key]
  }
  return result
}

export {}
