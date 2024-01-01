import '../src/ext/array'

const list = [0, 9, 1]

describe('Array', () => {
  describe('.isEmpty()', () => {
    test('empty array returns true', () => expect([].isEmpty()).toBeTruthy())

    test('non-empty array returns false', () =>
      expect(list.isEmpty()).toBeFalsy())
  })
})

export {}
