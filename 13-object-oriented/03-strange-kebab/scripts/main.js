/**
 * @file main.js
 * @description Adds a custom method to the String prototype that converts a string to 
 * a "strange kebab-case" format.
 * @author Luca Montanaro
 * @date May, 2025
 *
 * @remarks
 * This script demonstrates advanced string manipulation by extending the String prototype.
 * The toStrangeKebab method handles camelCase, ALL CAPS words, 
 * non-alphanumeric characters, and produces a kebab-case string.
 */

/**
 * Converts a string to a "strange kebab-case" format.
 * - Splits camelCase words.
 * - Replaces non-alphanumeric characters with spaces.
 * - Splits ALL CAPS words (like "MMM") into individual characters.
 * - Converts everything to lowercase and joins with dashes.
 * @function toStrangeKebab
 * @memberof String.prototype
 * @returns {string} The transformed kebab-case string.
 * @example
 * "MyNameIsMyPassportVerifyMe".toStrangeKebab(); // "my-name-is-my-passport-verify-me"
 * "My Name Is MMM".toStrangeKebab(); // "my-name-is-m-m-m"
 */
String.prototype.toStrangeKebab = function () {
  return this
    .replace(/([a-z])([A-Z])/g, '$1 $2')    // Split camelCase: "MyName" -> "My Name"
    .replace(/[^a-zA-Z0-9]+/g, ' ')         // Replace all non-alphanumeric characters with spaces
    .trim()                                 // Trim leading/trailing spaces
    .split(/\s+/)                           // Split on one or more spaces
    .flatMap(word =>
      /^[A-Z]{2,}$/.test(word)              // If the word is ALL CAPS (like "MMM")
        ? word.split('')                    // Split it into individual characters
        : word
    )
    .map(w => w.toLowerCase())              // Lowercase everything
    .join('-');                             // Join with dash
};

// Example input array
const source = [
  'MyNameIsMyPassportVerifyMe',
  'My Name Is My Passport Verify Me MMM',
  ' -- -My?Name&*is**my$$Passport???p??',
  'mY--name--- is- - 2023---',
  'mynameismypassport',
  '2022 my name is',
  '2024-my-name-is'
];

// Apply toStrangeKebab to each string and print the result
source.forEach(item => console.log(item.toStrangeKebab()));
