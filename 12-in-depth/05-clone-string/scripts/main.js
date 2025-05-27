/**
 * @file main.js
 * @description Clones only string properties from an object, including nested objects and arrays, omitting all other types.
 * @author Luca Montanaro
 * @date May, 2025
 *
 * @remarks
 * This script defines a function that recursively clones only the string properties of an object.
 * It is tested on a sample employee object. Non-string properties (numbers, booleans, Dates, etc.) are omitted.
 */

/**
 * @typedef {Object} Employee
 * @property {string} name
 * @property {string} email
 * @property {string} address
 * @property {string} bio
 * @property {boolean} active
 * @property {number} salary
 * @property {Date} birth
 * @property {Object} bankInformation
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
  },
};

/**
 * Recursively clones only string properties from an object.
 * Ignores all other property types (numbers, booleans, Dates, etc.).
 * @function cloneStrings
 * @param {Object} object - The object to clone.
 * @returns {Object} A new object containing only string properties.
 */
function cloneStrings(object) {
  const newObject = {};

  for (let property in object) {
    // If the property is an object (and not null), handle accordingly
    if (typeof object[property] === "object" && object[property] !== null) {
      // Skip Date objects
      if (object[property] instanceof Date) {
        continue;
      }
      // If it's an array, recursively clone string/object items
      else if (Array.isArray(object[property])) {
        newObject[property] = object[property]
          .map((item) => {
            // Recursively clone if object, or keep if string
            if (typeof item === "object" && item !== null) {
              return cloneStrings(item);
            } else if (typeof item === "string") {
              return item;
            } // Ignore non-string, non-object items / therefore no final else statemente needed
          })
          .filter((item) => item !== undefined);
        // Remove property if array is empty
        if (newObject[property].length === 0) delete newObject[property];
      }
      // Otherwise, recursively clone nested objects
      else {
        const nested = cloneStrings(object[property]);
        // Only add if nested object has string properties
        if (Object.keys(nested).length > 0) {
          newObject[property] = nested;
        }
      }
    } else {
      // Only clone string properties
      if (typeof object[property] === "string") {
        newObject[property] = object[property];
      }
    }
  }

  return newObject;
}

console.log(cloneStrings(employee));
