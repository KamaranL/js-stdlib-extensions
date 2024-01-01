/**
 * @module StringExtensions
 *
 */
declare global {
  /**
   * @interface String
   */
  interface String {
    /**
     * Returns a formatted string using printf-like tokens, %s, for string
     * substitution.
     *
     * @param {...any} args
     * Any amount of arguments to substitute for the same amount of %s in the originating string.
     *
     * @example
     * // returns 'Hello world, today is Monday.'
     * 'Hello %s, today is %s.'.format('world', 'Monday')
     */
    format(...args: any[]): string

    /**
     * Returns true if the length of the string is 0.
     *
     * @example
     * // returns true
     * ''.isEmpty()
     */
    isEmpty(): boolean

    /**
     * Returns a one-dimensional (1-D) object from a (multi-line) template
     * literal string that uses a separator, =, to distinguish key from value,
     * while using new lines to separate key-value pairs. A callback function
     * can also be provided to transform the keys and/or values before they are
     * returned.
     *
     * @param {string} options.separator
     * (Default: '=') If provided, the character(s) will be used to demarcate key-value pairs on a single line.
     *
     * @param {function} options.callbackFn
     * If provided, the function will be used to transform the key-value pairs before output.
     *
     * @example
     * // returns { name: 'Jack', age: 42, single: false }
     * `name=Jack
     * age=42
     * single=false`.toObject()
     *
     * @example
     * // returns { name: 'Mary', age: 25, single: true }
     * `NAME Mary
     * AGE 25
     * SINGLE true`.toObject({separator: ' ', callbackFn: ([k, v]) => [k.toLowerCase(), v]})
     */
    toObject(options?: {
      separator?: string
      callbackFn?: (value: [k: string, v: any]) => [k: string, v: any]
    }): {
      [key: PropertyKey]: any
    }
  }
}

String.prototype.format = function (...args: any[]): string {
  let result = this

  args.forEach(x => (result = result.replace(/%s/, String(x))))

  return result as string
}

String.prototype.isEmpty = function (): boolean {
  return this.length === 0
}

String.prototype.toObject = function (options?: {
  separator?: string
  callbackFn?: (entries: [k: string, v: any]) => [k: string, v: any]
}): {
  [key: PropertyKey]: any
} {
  const separator = options?.separator ?? '='
  const result: {
    [key: PropertyKey]: any
  } = {}
  const lines = this.split(/(\r)?\n/)

  for (const line of lines) {
    if (line && line.length && line.includes(separator)) {
      let k
      let v
      const entries = line.split(separator)

      if (entries.length > 2)
        throw new Error(`Only one separator allowed per line : ${line}`)

      k = entries[0].trim()
      v = entries[1].trim()

      if (v.length === 0 || typeof v === 'undefined') v = null
      else if (/(true|false)/.test(v.toLowerCase()))
        v = v.toLowerCase() === 'true'
      else if (!isNaN(Number(v))) v = Number(v)

      if (options?.callbackFn) [k, v] = options.callbackFn([k, v])

      result[k] = v
    }
  }

  return result
}

export {}
