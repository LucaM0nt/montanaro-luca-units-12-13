# Clone 🧬

This project demonstrates how to deeply clone objects in JavaScript, including nested objects, arrays, and Date instances, without using built-in cloning utilities. It shows how to ensure that changes to the cloned object do not affect the original.

## Assignment 📝

> - Write a function `clone()` (or similar) that clones any object
> - Test it on a sample object with nested objects, arrays, and Date properties
> - Change the name of the cloned object and make sure that the original did not change
> - **Important:**  
>   - Write the function yourself  
>   - Do not use built-in functions such as `Object.assign()`, `jQuery.extend()`, or `JSON.parse(JSON.stringify())`

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
The original and cloned objects will be printed to the console, demonstrating that the clone is independent.

## Functions 📋

The script defines the following key function:

- `objectCopy(object)`: Deeply clones any object, including nested objects, arrays, and Date instances.

## Variables Table 📊

| Variable Name   | Type           | Description                                                      |
|-----------------|----------------|------------------------------------------------------------------|
| `employee`      | `Object`       | The sample object to be cloned                                   |
| `objectCopy`    | `Function`     | Function that performs a deep clone of any object                |
| `clonedEmployee`| `Object`       | The result of cloning `employee`                                 |

## Example Usage and Output 📤

- The script prints both the original and the cloned object.
- After changing a property (e.g. `name`) in the clone, the original remains unchanged, proving deep cloning.

Example output:
```
Original employee: { name: 'Green Mueller', ... }
Cloned employee: { name: 'Cloned Mueller', ... }
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)