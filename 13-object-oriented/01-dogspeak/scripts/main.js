/**
 * @file main.js
 * @description Adds a custom method to the String prototype that outputs 
 * the string followed by " Woof!".
 * @author Luca Montanaro
 * @date May, 2025
 *
 * @remarks
 * This script demonstrates how to extend the String prototype in JavaScript 
 * by adding a custom method.
 * The method, dogSpeak, prints the string value with a dog bark appended.
 */

/**
 * Adds a dogSpeak method to all string instances.
 * When called, it prints the string followed by " Woof!" to the console.
 * @function dogSpeak
 * @memberof String.prototype
 */
String.prototype.dogSpeak = function () {
  // Print the string value followed by " Woof!"
  console.log(this.toString() + ' Woof!');
};

// Example usage:
let s = 'We like to learn';
s.dogSpeak(); // Console output: We like to learn Woof!

'Dogs are smart'.dogSpeak(); // Console output: Dogs are smart Woof!
