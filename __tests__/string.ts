import '../src/ext/string'

const str = 'Hello %s'
const strObj = `
Name=Jack
Age=35
City=Birmingham
Single=True
`

describe('String', () => {
  describe('.format([string])', () => {
    test(`'${str} => Hello World'`, () =>
      expect(str.format('World')).toBe('Hello World'))
  })

  describe('.isEmpty()', () => {
    test('empty string returns true', () => expect(''.isEmpty()).toBeTruthy())

    test('non-empty string returns false', () =>
      expect(str.isEmpty()).toBeFalsy())
  })

  describe('.toObject()', () => {
    test('value is an object', () =>
      expect(typeof strObj.toObject()).toBe('object'))

    test('multiple separators will throw an error', () =>
      expect(() => `Name=Jack=Manson`.toObject()).toThrow())

    describe(".toObject({separator: ' ', callbackFn: [Fn]})", () =>
      test('keys are lowercased from Fn', () =>
        expect(
          Object.keys(
            strObj.replace('=', ' ').toObject({
              separator: ' ',
              callbackFn: ([k, v]) => [k.toLowerCase(), v]
            })
          ).every(x => x.match(/^[a-z].+$/))
        ).toBeTruthy()))
  })
})

export {}
