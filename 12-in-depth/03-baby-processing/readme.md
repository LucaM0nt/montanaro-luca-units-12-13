# Baby Processing 👶🍽️

This project demonstrates advanced object and array manipulation by modeling babies, describing their outfits, and simulating feeding them with their favorite foods in random order. It covers object property access, array shuffling, and string formatting in JavaScript.

## Assignment 📝

> - Using the babies array from the previous exercise (each baby has `name`, `months`, `noises`, `favoriteFoods`, and `outfit`)
> - Write a `getBabyOutfit()` function that returns a description of a baby's outfit  
>   - e.g. `"Lyla is wearing a blue shirt and red pants and a green hat"`
> - Write a `feedBaby()` function that prints what a baby is eating  
>   - e.g. `"Lyla is eating food3, food1, food4 and food2"`  
>   - All foods in `favoriteFoods` should appear, but in random order each time the function is called
> - Run both functions on all the babies

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
The outfit and feeding descriptions for each baby will be printed to the console.

## Functions 📋

The script defines the following key functions:

- `getBabyOutfit(baby)`: Returns a string describing the baby's outfit by joining all clothing items.
- `feedBaby(baby)`: Returns a string describing what the baby is eating, with foods in random order.
- `randomiseArray(array)`: Helper function to shuffle an array.

## Variables Table 📊

| Variable Name   | Type             | Description                                                      |
|-----------------|------------------|------------------------------------------------------------------|
| `babies`        | `Array<Baby>`    | The array containing all baby objects                            |
| `getBabyOutfit` | `Function`       | Returns a formatted string describing a baby's outfit            |
| `feedBaby`      | `Function`       | Returns a formatted string describing what a baby is eating      |
| `randomiseArray`| `Function`       | Helper to randomize the order of an array's elements             |

## Example Usage and Output 📤

For each baby, the script prints:
- A description of their outfit (listing all clothing items)
- A randomized list of what they are eating (all favorite foods, shuffled)

Example output:

```
Glory is wearing a blue t-shirt and black jeans and white sneakers
Glory is eating banana and ramen and yogurt

Luna is wearing a green bomber and white crew-neck and brown leather boots
Luna is eating mashed banana and applesauce and rice cereal
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)