# Arrays

- e.g `const names = ["ole", "sissel", "Bo", "Anni"];`

**Array has builit in methods and propertys**

- push() \*
- pop() \*
- splice() \*
- slice() \*
- shift()
- sort()
- toString()
- unshift()
- join()
- delete()
- concat()
- flat()
- lenght

### push() : adds a new element to an array (at the end)

- `const names = ["ole", "sissel", "Bo", "Anni"]`
  - `names.push("Ib")`
  - `['ole', 'sissel', 'Bo', 'Anni', 'ib']`

### pop() : Removes the last element from an array

- `const names = ["ole", "sissel", "Bo", "Anni"]`
  - `names.pop()`
  - `["ole", "sissel", "Bo"]`

### splice adds new items to an array, and remove elemnets form array

#### splice() : _Adding new elements_

- `const names = ["ole", "sissel", "Bo", "Anni"]`

  - `names.splice(2,0,"Iben")`
  - ` ['ole', 'sissel', 'Iben', 'Bo', 'Anni']`

    - a. The first parameter (2) defines the position where new elements should be added (spliced in).

    - b. The second parameter (0) defines how many elements should be removed.

#### splice() : _Adding new elements and Remove elements_

- `const names = ["ole", "sissel", "Bo", "Anni"]`

  - `names.splice(1, 2, "Iben", "Marianne");`
  - `['ole', 'Iben', 'Marianne', 'Anni']`

### slice() : _method slices out a piece of an array into a new array_

- _The slice() method creates a new array_
- _The slice() method does not remove any elements from the source array._

#### E.G.

- `const names = ["ole", "sissel", "Bo", "Anni"]`
- `const names2 = names.slice(1, 3);`
  - `names = ["ole", "sissel", "Bo", "Anni"]`
  - `names2 = ['sissel', 'Bo']`

## Array Exercise

exercise_js_arrays[https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_arrays1]

exercises for beginners:[https://dev.to/kauresss/some-js-array-exercises-for-beginners-9j8]
