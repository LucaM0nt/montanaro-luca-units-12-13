# Babies 👶

This project demonstrates object and array manipulation by modeling babies, their attributes, and their outfits. It covers object creation, array operations, and object property assignment in JavaScript.

## Assignment 📝

> - Create an empty array of babies
> - Each baby should have the following properties:
>   - `name` (a string)
>   - `months` (age in months as a number)
>   - `noises` (an array of strings)
>   - `favoriteFoods` (an array of strings)
> - Add 5 different babies to the array using as many different ways as possible
> - Iterate through the array printing key and value pairs (e.g. `[name:"Lyla"]`)
> - Add an `outfit` property to each baby in the array
>   - Outfit should describe at least 3 parts of their clothing using different properties (e.g. `"shirt": "blue"`)
> - Print each baby again with their outfit in a nicely formatted object

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
The babies and their outfits will be printed to the console.

## Functions 📋

The script defines the following key functions:

- `printBabies(babiesArr)`: Iterates through the babies array and prints each key-value pair for every baby.
- `assignOutfits(babiesArr, outfitsArr)`: Assigns an outfit object to each baby in the array.

## Variables Table 📊

| Variable Name | Type              | Description                                             |
|---------------|-------------------|---------------------------------------------------------|
| `babies`      | `Array<Baby>`     | The array containing all baby objects                   |
| `baby1`-`baby5` | `Baby`          | Individual baby objects                                 |
| `outfit1`-`outfit5` | `Object`    | Outfit objects, each describing at least 3 clothing parts|
| `outfits`     | `Array<Object>`   | Array of all outfit objects                             |

## Example Usage and Output 📤

- The script prints each baby's properties (name, months, noises, favoriteFoods) before and after assigning outfits.
- After assigning outfits, each baby object includes an `outfit` property with detailed clothing information.

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)
