<style>
r { color: Red }
o { color: Orange }
g { color: Green }
blue { color: Blue }
</style>

# Numbers

**e.g.**

> - `let n1 = 33`
> - `let n2 = 10.5`
> - `let n3 = n1 + n1`

####TypeOf

> - `TypeOf("33")` : string
> - `TypeOf(n2)` : Number

####Operators

> - `n1 + n2` : plus
> - `n1 - n2` : minus
> - `n1 * n2` : multiplay
> - `n1 / n2` : divide
> - `n1 % n2` : modolus
> - `n1 ** n2` : Exponentiation

#### compound assignment operators

> - `n1 += n2` : compound addition operator
> - `n1 -= n2` : compound subtraction operator
> - `n1 *= n2` : compound multiplication operator
> - `n1 /= n2` : compound division operator
> - `n1 %= n2` : compound modulo operator
> - `n1 **= n2` : compound exponential operator

**e.g.**

> `let n1 = 33`
>
> - `n1 += 10` : Result <blue>43</blue>
>   - `n1 = n1 + 10` : Result <blue>43</blue>
> - `n1 -= 10` : Result <blue>23</blue>
>   - `n1 = n1 - 10` : Result <blue>23</blue>
> - `n1 /= 10` : Result <blue>23</blue>
>   - `n1 = n1 / 10` : Result <blue>23</blue>

what-are-compound-operators[https://www.educative.io/answers/what-are-compound-operators-in-javascript]

#### Increments

> - `let n1 = 33`
> - `n1--` : Return <blue>33</blue> -> but n1 is now <blue>32</blue>
> - `--n1` : Return <blue>32</blue>

#### Type Conversion

##### Converting Strings to Numbers

1. parseFloat()
2. parseInt()
3. Number()

**parseFloat()** : Parses a string and returns a floating point number

> - `parseFloat("49.8 kj")` : <blue>49.8</blue>

**parseInt()**: Parses a string and returns an integer

> - `parseInt("49.8 kj")` : <blue>49</blue>

**Number()** : Returns a number, converted from its argument

> - `Number("33")` : <blue>33</blue>
> - `Number("33 4")` : NaN

##### Converting Number to String

- `String(3)` : return "3"

##### Randum

- `Math.random();` Create a randum number

  - e.g. <blue>0.3471305287920352</blue>

  - `Math.ceil();` Always rounds up and returns the smallest integer greater than or equal to a given number.
    - e.g. `Math.ceil(6 * Math.random())` : Return an integer number from 1 til 6
