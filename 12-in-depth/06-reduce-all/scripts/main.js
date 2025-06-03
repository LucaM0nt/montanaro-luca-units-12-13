/**
 * @file main.js
 * @description Implements classic Array methods (forEach, map, filter, indexOf, slice) using .reduce.
 * @author Luca Montanaro
 * @date May, 2025
 *
 * @remarks
 * This script demonstrates how to reimplement common array methods using only the reduce method.
 * Each custom function mimics the behavior of its native counterpart and is tested with example outputs.
 */

// Example array for testing
let array = [1, 2, 3, 4, 5];

/**
 * Custom implementation of .forEach using reduce.
 * @function myForEach
 * @param {Array<any>} array - The array to iterate over.
 * @param {function(any, number, Array<any>): void} callback - Function to execute for each element.
 */
function myForEach(array, callback) {
  array.reduce((_, currElement, index, arr) => {
    callback(currElement, index, arr);
    return undefined;
  }, 0);
}

console.log("\nthis is the output of the myForEach function");
myForEach(array, (element) => console.log(element));

/**
 * Custom implementation of Array.prototype.map using reduce.
 * @function myMap
 * @param {Array<any>} array - The array to map.
 * @param {function(any, number, Array<any>): any} callback - Function that produces an element of the new Array.
 * @returns {Array<any>} A new array with each element being the result of the callback function.
 */
function myMap(array, callback) {
  const newArray = [];
  array.reduce((_, currElement, index, arr) => {
    let newElement = callback(currElement, index, arr);
    newArray.push(newElement);
    return undefined;
  }, 0);
  return newArray;
}

console.log("\nthis is the output of the myMap function");
let doubleArrayNumbers = myMap(array, (element) => element * 2);
console.log(doubleArrayNumbers);

/**
 * Custom implementation of Array.prototype.filter using reduce.
 * @function myFilter
 * @param {Array<any>} array - The array to filter.
 * @param {function(any, number, Array<any>): boolean} callback - Function to test each element.
 * @returns {Array<any>} A new array with the elements that pass the test.
 */
function myFilter(array, callback) {
  const newArray = [];
  array.reduce((_, currElement, index, arr) => {
    let bool = callback(currElement, index, arr);
    bool ? newArray.push(currElement) : null;
  }, 0);
  return newArray;
}

console.log("\nthis is the output of the myFilter function");
let evenArray = myFilter(array, (element) => element % 2 === 0);
console.log(evenArray);

/**
 * Custom implementation of Array.prototype.indexOf using reduce.
 * @function myIndexOf
 * @param {Array<any>} array - The array to search.
 * @param {any} value - The value to locate in the array.
 * @returns {number} The first index of the value in the array, or -1 if not found.
 */
function myIndexOf(array, value) {
  const newArray = [];
  array.reduce((_, currElement, index) => {
    currElement === value ? newArray.push(index) : newArray.push(-1);
  }, 0);
  const primoValido = newArray.find(element => element !== -1);
  return primoValido !== undefined ? primoValido : -1;
}

console.log("\nthis is the output of the myIndexOf function");
console.log(myIndexOf(array, 3));
console.log(myIndexOf(array, 0));

/**
 * Custom implementation of Array.prototype.slice using reduce.
 * @function mySlice
 * @param {Array<any>} array - The array to slice.
 * @param {number} indexFrom - Zero-based index at which to start extraction.
 * @param {number} [indexTo] - Zero-based index before which to end extraction.
 * @returns {Array<any>} A shallow copy of a portion of the array.
 */
function mySlice(array, indexFrom, indexTo) {
  const newArray = [];
  if (indexTo === undefined) {
    indexTo = array.length;
  }

  array.reduce((_, currElement, index) => {
    indexFrom <= index && index < indexTo ? newArray.push(currElement) : null;
  }, 0);
  return newArray;
}

console.log("\nthis is the output of the mySlice function");
let slicedArray = mySlice(array, 2, 4);
console.log(slicedArray);
