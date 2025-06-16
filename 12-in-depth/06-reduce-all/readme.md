# Reduce All 🔁

This project demonstrates how to reimplement classic JavaScript Array methods (`forEach`, `map`, `filter`, `indexOf`, `slice`) using only the `reduce` method. It is a functional programming exercise to deepen understanding of array iteration and transformation.

## Assignment 📝

> - Write functions that use the `reduce` method to implement your own versions of the following Array methods:
>   - `forEach()`
>   - `map()`
>   - `filter()`
>   - `indexOf()`
>   - `slice()`
> - Test each function and print the results to the console

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
Each custom function's output will be printed to the console, preceded by a label indicating which function produced it.

## Functions 📋

The script defines the following key functions:

- `myForEach(array, callback)`: Custom implementation of `forEach` using `reduce`
- `myMap(array, callback)`: Custom implementation of `map` using `reduce`
- `myFilter(array, callback)`: Custom implementation of `filter` using `reduce`
- `myIndexOf(array, value)`: Custom implementation of `indexOf` using `reduce`
- `mySlice(array, indexFrom, indexTo)`: Custom implementation of `slice` using `reduce`

## Variables Table 📊

| Variable Name        | Type             | Description                                      |
|----------------------|------------------|--------------------------------------------------|
| `array`              | `Array<number>`  | The example array used for testing               |
| `doubleArrayNumbers` | `Array<number>`  | Result of mapping each element to its double     |
| `evenArray`          | `Array<number>`  | Result of filtering for even numbers             |
| `slicedArray`        | `Array<number>`  | Result of slicing the array from index 2 to 4    |

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)