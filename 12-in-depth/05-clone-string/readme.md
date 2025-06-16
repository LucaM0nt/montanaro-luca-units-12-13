# Clone Strings Utility 📝

This project demonstrates how to recursively clone only the string properties from an object in JavaScript, including nested objects and arrays. All other property types (numbers, booleans, Dates, etc.) are omitted from the clone.

## Assignment 📝

> - Write a function `cloneStrings()` that only clones string properties of an object
> - The function should work recursively, including for nested objects and arrays
> - Test it on a sample object with various property types
> - The resulting object should contain only the string properties (with the same structure as the original)

## Usage 🛠️

To see this script in action, run the following command in your terminal:
```sh
node scripts/main.js
```
The resulting object, containing only string properties, will be printed to the console.

## Functions 📋

The script defines the following key function:

- `cloneStrings(object)`: Recursively clones only string properties from an object, omitting all other types.

## Variables Table 📊

| Variable Name   | Type           | Description                                                      |
|-----------------|----------------|------------------------------------------------------------------|
| `employee`      | `Object`       | The sample object to be cloned                                   |
| `cloneStrings`  | `Function`     | Function that performs a recursive clone of only string properties|

## Example Usage and Output 📤

- The script prints the resulting object, which contains only the string properties from the original object, preserving the nested structure.

Example output:
```
{
  name: 'Green Mueller',
  email: 'Rigoberto_Muller47@yahoo.com',
  address: '575 Aiden Forks',
  bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
  bankInformation: {
    amount: '802.04',
    business: 'Bernhard, Kuhn and Stehr',
    name: 'Investment Account 8624',
    type: 'payment',
    account: '34889694'
  }
}
```

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)