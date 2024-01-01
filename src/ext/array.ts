/**
 * @module ArrayExtensions
 *
 */
declare global {
  /**
   * @interface Array
   */
  interface Array<T> {
    /**
     * Returns true if the length of the array is 0.
     *
     * @example
     * // returns true
     * [].isEmpty()
     */
    isEmpty(): boolean
  }
}

Array.prototype.isEmpty = function (): boolean {
  return this.length === 0
}

export {}
