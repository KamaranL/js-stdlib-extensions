import '../src/ext/object'

const person = {
  name: 'John',
  age: 42,
  single: false,
  children: [
    {
      name: 'Mary',
      age: 18
    },
    {
      name: 'Nicholas',
      age: 11
    },
    {
      name: 'Adam',
      age: 21
    }
  ],
  letters: ['a', 'd', 'z', 'c'],
  numbers: [9, 1, 0, 4]
}

describe('Object', () => {
  describe('.isEmpty(o)', () => {
    test('empty object returns true', () =>
      expect(Object.isEmpty({})).toBeTruthy())

    test('non-empty object returns false', () =>
      expect(Object.isEmpty(person)).toBeFalsy())
  })

  describe('.flatMap(o)', () => {
    Object.flatMap(person).forEach(e => {
      test('element is an object', () => expect(typeof e).toBe('object'))

      Object.values(e).forEach(v => {
        test('  - value is an array', () =>
          expect(Array.isArray(v)).toBeTruthy())

        test('    - items in value are consistent', () => {
          expect(typeof v[0]).toBe(v[1])
          expect(v[1]).toMatch(/string|number|bigint|boolean|symbol|null/)
        })
      })
    })

    describe('.flatMap(o, {types: false})', () =>
      Object.flatMap(person, {types: false}).forEach(e => {
        test('element is an object', () => expect(typeof e).toBe('object'))

        Object.values(e).forEach(v => {
          test('  - value is of correct type', () =>
            expect(typeof v).toMatch(
              /string|number|bigint|boolean|symbol|null/
            ))
        })
      }))
  })

  describe('.sort(o)', () => {
    test("first key is 'age'", () =>
      expect(Object.keys(Object.sort(person))[0]).toBe('age'))

    describe('.sort(o, {descending: true})', () =>
      test("first key is 'single'", () =>
        expect(Object.keys(Object.sort(person, {descending: true}))[0]).toBe(
          'single'
        )))

    describe('.sort(o, {recursive: true})', () => {
      test("first letter is 'a'", () =>
        expect(Object.sort(person, {recursive: true}).letters[0]).toBe('a'))

      test("first number is '0'", () =>
        expect(Object.sort(person, {recursive: true}).numbers[0]).toBe(0))
    })

    describe('.sort(o, {recursive: true, descending: true})', () => {
      test("first letter is 'z'", () =>
        expect(
          Object.sort(person, {recursive: true, descending: true}).letters[0]
        ).toBe('z'))

      test("first number is '9'", () =>
        expect(
          Object.sort(person, {recursive: true, descending: true}).numbers[0]
        ).toBe(9))
    })

    describe(".sort(o, {recursive: true, property: 'name'})", () =>
      test("first child is 'Adam'", () =>
        expect(
          Object.sort(person, {recursive: true, property: 'name'}).children[0]
            .name
        ).toBe('Adam')))

    describe(".sort(o, {recursive: true, property: 'age'})", () =>
      test("first child is 'Nicholas'", () =>
        expect(
          Object.sort(person, {recursive: true, property: 'age'}).children[0]
            .name
        ).toBe('Nicholas')))
  })
})

export {}
