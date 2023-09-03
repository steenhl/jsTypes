# Simple calculater

## selection the dom

- `document.querySelector("domName")`: return the first DOM element
- `document.querySelectorAll("domName")` : return a DOM node list

### It is possible to use all CSS selectors ass agument

**E.G.**

- `document.querySelectorAll("li:nth-child(even)")`
- `document.querySelectorAll("li:li:last-child")`

#### CSS Selectors Cheat Sheet and tests

- Freecodecamp [https://www.freecodecamp.org/news/css-selectors-cheat-sheet/]
- Codecademy[https://www.codecademy.com/learn/learn-css/modules/syntax-and-selectors/cheatsheet]
- Css-tricks [https://css-tricks.com/almanac/selectors/]
- Test your ccs knowledge [https://frontend30.com/css-selectors-cheatsheet/]

## Pure functions'

- A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
- It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input
  arguments.
- Also, a pure function does not produce any observable side effects such as network requests or data mutation, etc.

**E.G.**

- `function add(a, b) { return a + b}`
- `function minus(a, b) {return a - b;}`

### Not pure functions

**E.G.**

- `function minus(a, b) {console.log(a - b)}`
- `function changeText() {const calcResultText = document.querySelector("#calc-result-text");calcResultText innerHTML = "55";}`
