[js-stdlib-extensions](/docs/README.md) / [Exports](/docs/modules.md) / [ObjectExtensions](/docs/modules/ObjectExtensions.md) / ObjectConstructor

# Interface: ObjectConstructor

[ObjectExtensions](/docs/modules/ObjectExtensions.md).ObjectConstructor

ObjectConstructor

## Table of contents

### Methods

- [flatMap](/docs/interfaces/ObjectExtensions.ObjectConstructor.md#flatmap)
- [isEmpty](/docs/interfaces/ObjectExtensions.ObjectConstructor.md#isempty)
- [sort](/docs/interfaces/ObjectExtensions.ObjectConstructor.md#sort)

## Methods

### flatMap

▸ **flatMap**\<`T`\>(`o`, `options?`): \{ `[key: string]`: `string` \| [value: string, type: string];  }[]

Returns a flat map of a multi-dimensional object with, or without, type
definitions of the value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object. |
| `options?` | `Object` | - |
| `options.types?` | `boolean` | If false, will return only the value with each object key, instead of an array that contains the value with the type definition of the value. |

#### Returns

\{ `[key: string]`: `string` \| [value: string, type: string];  }[]

**`Example`**

```ts
// returns [
//   { name: [ 'John', 'string' ] },
//   { age: [ 42, 'number' ] },
//   { 'children.0.name': [ 'Mary', 'string' ] },
//   { 'children.0.age': [ 18, 'number' ] },
//   { 'children.1.name': [ 'Nicholas', 'string' ] },
//   { 'children.1.age': [ 11, 'number' ] },
//   { 'children.2.name': [ 'Adam', 'string' ] },
//   { 'children.2.age': [ 21, 'number' ] },
//   { 'letters.0': [ 'a', 'string' ] },
//   { 'letters.1': [ 'd', 'string' ] },
//   { 'letters.2': [ 'z', 'string' ] },
//   { 'letters.3': [ 'c', 'string' ] },
//   { 'numbers.0': [ 9, 'number' ] },
//   { 'numbers.1': [ 1, 'number' ] },
//   { 'numbers.3': [ 4, 'number' ] }
// ]
Object.flatMap({
  name: 'John',
  age: 42,
  single: false,
  children: [
  { name: 'Mary', age: 18 },
  { name: 'Nicholas', age: 11 },
  { name: 'Adam', age: 21 }
  ],
  letters: [ 'a', 'd', 'z', 'c' ],
  numbers: [ 9, 1, 0, 4 ]
})
```

**`Example`**

```ts
// returns [
//   { name: 'John' },
//   { age: 42 },
//   { 'children.0.name': 'Mary' },
//   { 'children.0.age': 18 },
//   { 'children.1.name': 'Nicholas' },
//   { 'children.1.age': 11 },
//   { 'children.2.name': 'Adam' },
//   { 'children.2.age': 21 },
//   { 'letters.0': 'a' },
//   { 'letters.1': 'd' },
//   { 'letters.2': 'z' },
//   { 'letters.3': 'c' },
//   { 'numbers.0': 9 },
//   { 'numbers.1': 1 },
//   { 'numbers.3': 4 }
// ]
Object.flatMap({
  name: 'John',
  age: 42,
  single: false,
  children: [
  { name: 'Mary', age: 18 },
  { name: 'Nicholas', age: 11 },
  { name: 'Adam', age: 21 }
  ],
  letters: [ 'a', 'd', 'z', 'c' ],
  numbers: [ 9, 1, 0, 4 ]
}, {types: false})
```

#### Defined in

[object.ts:82](https://github.com/KamaranL/js-stdlib-extensions/blob/a5149fe/src/ext/object.ts#L82)

___

### isEmpty

▸ **isEmpty**\<`T`\>(`o`): `boolean`

Return true if the length of Object.keys() is 0.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object. |

#### Returns

`boolean`

**`Example`**

```ts
// returns true
Object.isEmpty({})
```

#### Defined in

[object.ts:99](https://github.com/KamaranL/js-stdlib-extensions/blob/a5149fe/src/ext/object.ts#L99)

___

### sort

▸ **sort**\<`T`\>(`o`, `options?`): `T`

Returns an object with sorted keys.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object. |
| `options?` | `Object` | - |
| `options.descending?` | `boolean` | If true, will sort object keys in descending order. |
| `options.property?` | `string` | If provided, will sort arrays of objects by the specified property. |
| `options.recursive?` | `boolean` | If true, will recursively sort any nested objects/arrays. |

#### Returns

`T`

**`Example`**

```ts
// returns {
//   age: 42,
//   children: [
//     { name: 'Mary', age: 18 },
//     { name: 'Nicholas', age: 11 },
//     { name: 'Adam', age: 21 }
//   ],
//   letters: [ 'a', 'd', 'z', 'c' ],
//   name: 'John',
//   numbers: [ 9, 1, 0, 4 ],
//   single: false
// }
Object.sort({
  name: 'John',
  age: 42,
  single: false,
  children: [
  { name: 'Mary', age: 18 },
  { name: 'Nicholas', age: 11 },
  { name: 'Adam', age: 21 }
  ],
  letters: [ 'a', 'd', 'z', 'c' ],
  numbers: [ 9, 1, 0, 4 ]
})
```

**`Example`**

```ts
// returns {
//   age: 42,
//   children: [
//     { age: 11, name: 'Nicholas' },
//     { age: 18, name: 'Mary' },
//     { age: 21, name: 'Adam' }
//   ],
//   letters: [ 'a', 'c', 'd', 'z' ],
//   name: 'John',
//   numbers: [ 0, 1, 4, 9 ],
//   single: false
// }
Object.sort({
  name: 'John',
  age: 42,
  single: false,
  children: [
  { name: 'Mary', age: 18 },
  { name: 'Nicholas', age: 11 },
  { name: 'Adam', age: 21 }
  ],
  letters: [ 'a', 'd', 'z', 'c' ],
  numbers: [ 9, 1, 0, 4 ]
}, {recursive: true, property: 'age'})
```

#### Defined in

[object.ts:168](https://github.com/KamaranL/js-stdlib-extensions/blob/a5149fe/src/ext/object.ts#L168)
