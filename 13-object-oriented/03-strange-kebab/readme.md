# Strange Kebab 🥙

This project demonstrates how to extend the JavaScript String prototype by adding a custom method. The new method, `toStrangeKebab`, transforms a string into a "strange kebab-case" format, handling camelCase, ALL CAPS words, non-alphanumeric characters, and more.

## Assignment 📝

> - Add a method `toStrangeKebab()` to the String prototype
> - The method should:
>   - Split camelCase words into separate words
>   - Replace all non-alphanumeric characters with spaces
>   - Split ALL CAPS words (like "MMM") into individual characters
>   - Convert everything to lowercase and join with dashes
> - Test the method on different string values

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
You will see the output of the `toStrangeKebab` method for each string in the example array.

## Functions 📋

The script defines the following key function:

- `String.prototype.toStrangeKebab()`: Converts a string to a "strange kebab-case" format as described above.

## Variables Table 📊

| Variable Name | Type               | Description                                         |
|---------------|--------------------|-----------------------------------------------------|
| `source`      | `Array<string>`    | Example strings to demonstrate `toStrangeKebab`     |

## Example Usage and Output 📤

Example output:

    my-name-is-my-passport-verify-me
    my-name-is-my-passport-verify-me-m-m-m
    my-name-is-my-passport-p
    m-y-name-is-2023
    mynameismypassport
    2022-my-name-is
    2024-my-name-is

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)
