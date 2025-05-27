/**
 * @file main.js
 * @description Demonstrates deep cloning of objects, including nested objects, arrays, and Date instances, without using built-in cloning utilities.
 * @author Luca Montanaro
 * @date May, 2025
 * 
 * @remarks
 * This script defines a deep clone function for objects, which is tested on a sample employee object.
 * The function handles nested objects, arrays, and Date objects. After cloning, the script demonstrates
 * that changes to the clone do not affect the original object.
 */

/**
 * @typedef {Object} Employee
 * @property {string} name - Employee's name
 * @property {string} email - Employee's email
 * @property {string} address - Employee's address
 * @property {string} bio - Employee's biography
 * @property {boolean} active - Employee's active status
 * @property {number} salary - Employee's salary
 * @property {Date} birth - Employee's birth date
 * @property {Object} bankInformation - Employee's bank information
 * @property {string} bankInformation.amount
 * @property {Date} bankInformation.date
 * @property {string} bankInformation.business
 * @property {string} bankInformation.name
 * @property {string} bankInformation.type
 * @property {string} bankInformation.account
 */
const employee = {
  name: "Green Mueller",
  email: "Rigoberto_Muller47@yahoo.com",
  address: "575 Aiden Forks",
  bio: "Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.",
  active: false,
  salary: 37993,
  birth: new Date(
    "Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time)"
  ),
  bankInformation: {
    amount: "802.04",
    date: new Date(
      "Thu Feb 02 2012 00:00:00 GMT+0100 (W. Europe Standard Time)"
    ),
    business: "Bernhard, Kuhn and Stehr",
    name: "Investment Account 8624",
    type: "payment",
    account: "34889694",
  }
};

/**
 * Deeply clones any object, including nested objects, arrays, and Date instances.
 * Does not use Object.assign, JSON methods, or external libraries.
 * @function objectCopy
 * @param {Object} object - The object to clone.
 * @returns {Object} A deep clone of the input object.
 */
function cloneString(object) {
  // Create a new object to hold the clone
  const newObject = {};

  // Iterate over each property in the object
  for (let property in object) {
    // If the property is an object and not null, handle accordingly
    if (typeof object[property] === "object" && object[property] !== null) {
      // If it's a Date, create a new Date instance
      if (object[property] instanceof Date) {
        newObject[property] = new Date(object[property]);
      }
      // If it's an Array, recursively clone each item
      else if (Array.isArray(object[property])) {
        newObject[property] = object[property].map(item =>
          typeof item === "object" && item !== null ? cloneString(item) : item
        );
      }
      // Otherwise, recursively clone the nested object
      else {
        newObject[property] = cloneString(object[property]);
      }
    } else {
      // For primitive values, just copy directly
      newObject[property] = object[property];
    }
  }

  return newObject;
}

// Test the clone function
const clonedEmployee = cloneString(employee);

// Change the name of the cloned object
clonedEmployee.name = "Cloned Mueller";

// Print both objects to verify that the original did not change
console.log("Original employee:", employee);
console.log("Cloned employee:", clonedEmployee);