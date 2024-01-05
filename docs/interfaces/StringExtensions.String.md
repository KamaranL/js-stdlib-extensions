[js-stdlib-extensions](/docs/README.md) / [Exports](/docs/modules.md) / [StringExtensions](/docs/modules/StringExtensions.md) / String

# Interface: String

[StringExtensions](/docs/modules/StringExtensions.md).String

String

## Table of contents

### Methods

- [format](/docs/interfaces/StringExtensions.String.md#format)
- [isEmpty](/docs/interfaces/StringExtensions.String.md#isempty)
- [toObject](/docs/interfaces/StringExtensions.String.md#toobject)

## Methods

### format

▸ **format**(`...args`): `string`

Returns a formatted string using printf-like tokens, %s, for string
substitution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `any`[] | Any amount of arguments to substitute for the same amount of %s in the originating string. |

#### Returns

`string`

**`Example`**

```ts
// returns 'Hello world, today is Monday.'
'Hello %s, today is %s.'.format('world', 'Monday')
```

#### Defined in

[string.ts:21](https://github.com/KamaranL/js-stdlib-extensions/blob/b14a98e/src/ext/string.ts#L21)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns true if the length of the string is 0.

#### Returns

`boolean`

**`Example`**

```ts
// returns true
''.isEmpty()
```

#### Defined in

[string.ts:30](https://github.com/KamaranL/js-stdlib-extensions/blob/b14a98e/src/ext/string.ts#L30)

___

### toObject

▸ **toObject**(`options?`): `Object`

Returns a one-dimensional (1-D) object from a (multi-line) template
literal string that uses a separator, =, to distinguish key from value,
while using new lines to separate key-value pairs. A callback function
can also be provided to transform the keys and/or values before they are
returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.callbackFn?` | (`value`: [k: string, v: any]) => [k: string, v: any] | If provided, the function will be used to transform the key-value pairs before output. |
| `options.separator?` | `string` | (Default: '=') If provided, the character(s) will be used to demarcate key-value pairs on a single line. |

#### Returns

`Object`

**`Example`**

```ts
// returns { name: 'Jack', age: 42, single: false }
`name=Jack
age=42
single=false`.toObject()
```

**`Example`**

```ts
// returns { name: 'Mary', age: 25, single: true }
`NAME Mary
AGE 25
SINGLE true`.toObject({separator: ' ', callbackFn: ([k, v]) => [k.toLowerCase(), v]})
```

#### Defined in

[string.ts:57](https://github.com/KamaranL/js-stdlib-extensions/blob/b14a98e/src/ext/string.ts#L57)
