# JavaScript has 8 Datatypes

datatypes[https://www.w3schools.com/js/js_datatypes.asp]

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

# Primitives and Non-Primitives data types

JavaScript primitive data types are data types that refer to a single value.

- `let a = 3`
- `let b = a`
- `b = 4`
- `a === b`: false

[data-types-in-javascript]https://www.edureka.co/blog/data-types-in-javascript/

An object holds a reference/address of a single key-value pair or many key-value pairs. Whenever we refer to an object,
we refer to an address in memory which contains the key-value pair.

- `let name1 = {name: "ole"}`
- `let name2 = name1`
- `console.log(name2)` : `{name: "ole"}`
- `name2.name = "Kurt"`
- `console.log(name1)` : `{name: "Kurt"}`
- `console.log(name2)` : `{name: "Kurt"}`
- `name2 === name1` : true

## Difference beteen primitive and non-primitives

Thus primitive data types refer to a ‘single value’ in an address in memory whereas non-primitive data types refer to
the ‘address’ in memory which contains single or multiple key-value pair/s.

## Only the Object type are non-primitive

Object point to one place in memory

## Examples

### String

e.g `let forname = "Ole"`

## Number

e.g. `let age = 33`

### Boolean

- e.g. `let sand = true`
- e.g. `let falsk = false`
- e.g. `let age = 33 < 44`

### Undefined

- e.g. `let age`

### Null

- e.g. `let ingenting = null`

#### Defference between null and Undefined

- Undefined means the variable has been declared, but its value has not been assigned.
- Null means an empty value or a blank value.

### Symbol

symbol[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol]

### Object

- e.g. `{forname: "steen", lastname: "Larsen"}`
- e.g. `const carsObject = { cars: ["Volvo", "Citroen"] };`

- Objects can includes
  - 1. An object
  - 2. An array
  - 3. A date

educative [https://www.educative.io/explore]
