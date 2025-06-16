# Soundwave 🔊

This project transforms an array of noise words into a new array of strings, each with a specific pattern of capitalization and exclamation marks. It demonstrates array iteration, string manipulation, and functional programming in JavaScript.

## Assignment 📝

> - Given an array like `["quack", "sneeze", "boom"]`
> - For each word, generate a set of variants:
>   - Each variant has one letter capitalized (progressively from left to right)
>   - Each variant has an increasing number of exclamation marks (starting from 1)
> - Collect all variants in a single array and print it to the console

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
The transformed array will be printed to the console.

## Functions 📋

The script defines the following key functions:

- `wordToArray(word, letterIndex)`: Returns a variant of the word with the letter at `letterIndex` capitalized and the appropriate number of exclamation marks.
- The main logic iterates over each word and each letter, using `wordToArray` to build the final array.

## Variables Table 📊

| Variable Name   | Type             | Description                                                      |
|-----------------|------------------|------------------------------------------------------------------|
| `noisesArray`   | `Array<string>`  | The input array of noise words                                   |
| `finalArray`    | `Array<string>`  | The output array containing all transformed noise variants        |

## Example Usage and Output 📤

Given the input:
```js
["quack", "sneeze", "boom"]
```
The output will be:
```js
[
  "Quack!", "qUack!!", "quAck!!!", "quaCk!!!!", "quacK!!!!!",
  "Sneeze!", "sNeeze!!", "snEeze!!!", "sneEze!!!!", "sneeZe!!!!!", "sneezE!!!!!!",
  "Boom!", "bOom!!", "boOm!!!", "booM!!!!"
]
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)