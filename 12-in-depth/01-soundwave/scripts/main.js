/**
 * @file main.js
 * @description Transforms an array of noise strings into a new array with specific capitalization and punctuation patterns.
 * @author Luca Montanaro
 * @date May, 2025
 * 
 * @remarks
 * This script takes an array of noise words and, for each word, generates several variants:
 *   - Each variant has one letter capitalized (progressively from left to right) and an increasing number of exclamation marks.
 *   - The result is a single array containing all these variants, which is then printed to the console.
 * The script demonstrates the use of array methods, string manipulation, and functional programming in JavaScript.
 */

/**
 * @type {Array<string>}
 * @description The input array of noise words to be transformed.
 */
let noisesArray = ["quack", "sneeze", "boom"];

/**
 * @type {Array<string>}
 * @description The final array containing all transformed noise variants.
 */
const finalArray = [];

/**
 * Transforms a word by capitalizing the letter at the given index and appending exclamation marks.
 * 
 * @function wordToArray
 * @param {string} word - The original word to transform.
 * @param {number} letterIndex - The index of the letter to capitalize.
 * @returns {string} The transformed word with one capitalized letter and exclamation marks.
 */
function wordToArray(word, letterIndex) {
  // Split the word into characters, capitalize the specified letter based on current index, and join back
  let newWord =
    word
      .split("")
      .map((letter, index) => {
        return index === letterIndex ? letter.toUpperCase() : letter;
      })
      .join("") + "!".repeat(letterIndex + 1); // Add exclamation marks
  return newWord;
}

// For each word in the noisesArray, generate all variants and add them to finalArray using wordToArray
noisesArray.forEach(currentWord => {
  for (let letterIndex in currentWord) {
    finalArray.push(wordToArray(currentWord, Number(letterIndex)));
  }
});

// Print the resulting array to the console
console.log(finalArray);