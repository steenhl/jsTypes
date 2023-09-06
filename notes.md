# JavaScript has 8 Datatypes

datatypes[https://www.w3schools.com/js/js_datatypes.asp]

| Number | Types     | Description   |
| ------ | --------- | ------------- |
| 1      | String    | Primitive     |
| 2      | Number    | Primitive     |
| 3      | Bigint    | Primitive     |
| 4      | Boolean   | Primitive     |
| 5      | Undefined | Primitive     |
| 6      | Null      | Primitive     |
| 7      | Symbol    | Primitive     |
| 8      | Object    | Non primitive |

# Primitives and Non-Primitives data types

JavaScript primitive data types are data types that refer to a single value.

## Primitives are immutable

Primitives are known as being immutable data types because there is no way to change a primitive value once it gets
created.

> - `let halloWold = "hallo wold";`
> - `halloWold[0] = "J";`
> - `console.log(halloWold);`
> - `hallo wold`

But it is possible to assign a new value to the helloWold variable as shown below

> - `let halloWold = "hallo wold";`
> - `halloWold = "Hallo Frinds";`
> - `console.log(halloWold);`
> - `Hallo Frinds`

We can assign a value from another variabel and then compaire the two variabel

> - `let a = 3`
> - `let b = a`
> - `b = 4`
> - `a === b`: false

[data-types-in-javascript]https://www.edureka.co/blog/data-types-in-javascript/

## Difference beteen primitive and non-primitives

Thus primitive data types refer to a ‘single value’ in an address in memory whereas non-primitive data types refer to
the ‘address’ in memory which contains single or multiple key-value pair/s.

## Only the Object type are non-primitive

An object holds a reference/address of a single key-value pair or many key-value pairs. Whenever we refer to an object,
we refer to an address in memory which contains the key-value pair.

> - `let name1 = {name: "ole"}`
> - `let name2 = name1`
> - `console.log(name2)` : `{name: "ole"}`

Adding the variable "name1 "equal to variabel "name2" do not copy the value from variable "name1 to varable "name2" but
add a referance to the same place in memory

> - `name2.name = "Kurt"`
> - `console.log(name1)` : `{name: "Kurt"}`
> - `console.log(name2)` : `{name: "Kurt"}`
> - `name2 === name1` : true

**Variable "name1" and variable "name2" point at the same place in memory.**

When we changing the value of the variable **"name2"** we at the same time change the value of the variable **"name1"**,
because they pointing at the same place in memory

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

## Link and books

- educative [https://www.educative.io/explore]
- Learn to code with javascript [https://www.sitepoint.com/premium/books/learn-to-code-with-javascript/read/1/]
- GitHub repository: **Steen h Larsen** [https://github.com/steenhl/jsTypes]
