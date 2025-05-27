/**
 * @file main.js
 * @description Demonstrates object and array manipulation by modeling babies, their attributes, and outfits.
 * @author Luca Montanaro
 * @date April, 2025
 *
 * @remarks
 * This script creates an array of baby objects, each with properties such as name, age in months, noises,
 * and favorite foods.
 * Babies are added to the array using different array methods. The script then prints each baby's properties.
 * Afterwards, an outfit object is assigned to each baby, and the babies are printed again with their outfits.
 */

// Create an empty array of babies
/**
 * @type {Array<Object>}
 * @description Array to store baby objects.
 */
let babies = [];

// Create 5 baby objects with required properties
/**
 * @typedef {Object} Baby
 * @property {string} name - Baby's name
 * @property {number} months - Baby's age in months
 * @property {Array<string>} noises - Array of noises the baby makes
 * @property {Array<string>} favoriteFoods - Array of baby's favorite foods
 * @property {Object} [outfit] - Baby's outfit (added later)
 */
const baby1 = {
  name: "Luna",
  months: 6,
  noises: ["goo", "ga", "babble"],
  favoriteFoods: ["mashed banana", "rice cereal"],
};
/**
 * @typedef {Object} Baby
 * @property {string} name - Baby's name
 * @property {number} months - Baby's age in months
 * @property {Array<string>} noises - Array of noises the baby makes
 * @property {Array<string>} favoriteFoods - Array of baby's favorite foods
 * @property {Object} [outfit] - Baby's outfit (added later)
 */
const baby2 = {
  name: "Max",
  months: 9,
  noises: ["giggle", "coo", "da-da"],
  favoriteFoods: ["pureed carrots", "apple sauce"],
};
/**
 * @typedef {Object} Baby
 * @property {string} name - Baby's name
 * @property {number} months - Baby's age in months
 * @property {Array<string>} noises - Array of noises the baby makes
 * @property {Array<string>} favoriteFoods - Array of baby's favorite foods
 * @property {Object} [outfit] - Baby's outfit (added later)
 */
const baby3 = {
  name: "Glory",
  months: 12,
  noises: ["ma-ma", "la-la", "ba"],
  favoriteFoods: ["ramen", "banana"],
};
/**
 * @typedef {Object} Baby
 * @property {string} name - Baby's name
 * @property {number} months - Baby's age in months
 * @property {Array<string>} noises - Array of noises the baby makes
 * @property {Array<string>} favoriteFoods - Array of baby's favorite foods
 * @property {Object} [outfit] - Baby's outfit (added later)
 */
const baby4 = {
  name: "Leo",
  months: 8,
  noises: ["hee", "ahh", "gurgle"],
  favoriteFoods: ["pureed peas", "avocado"],
};
/**
 * @typedef {Object} Baby
 * @property {string} name - Baby's name
 * @property {number} months - Baby's age in months
 * @property {Array<string>} noises - Array of noises the baby makes
 * @property {Array<string>} favoriteFoods - Array of baby's favorite foods
 * @property {Object} [outfit] - Baby's outfit (added later)
 */
const baby5 = {
  name: "Badr Jr.",
  months: 2,
  noises: ["cheee", "lol", "bruh"],
  favoriteFoods: ["hamburger", "pizza"],
};

// Add 5 babies to the array using as many different ways as possible
babies.push(baby1); // Add baby1 at the end using push
babies.splice(1, 0, baby2); // Insert baby2 at index 1 using splice
babies.unshift(baby3); // Add baby3 at the start using unshift
babies[3] = baby4; // Assign baby4 at index 3 using direct assignment
babies = [...babies, baby5]; // Add baby5 at the end using spread operator

/**
 * @function printBabies
 * @description Iterates through the babies array and prints each key-value pair for every baby.
 * @param {Array<Baby>} babiesArr - The array of baby objects to print.
 */
function printBabies(babiesArr) {
  babiesArr.forEach((baby) => {
    for (baby of babies) {
      for (key in baby) {
        console.log(key + ": " + baby[key]);
      }
      console.log("\n"); 
    } 
  });
}

// Print babies before adding outfits
printBabies(babies);

/**
 * @type {Object}
 * @property {string} shirt
 * @property {string} pants
 * @property {string} shoes
 */
const outfit1 = {
  shirt: "blue t-shirt",
  pants: "black jeans",
  shoes: "white sneakers",
};
/**
 * @type {Object}
 * @property {string} jacket
 * @property {string} tShirt
 * @property {string} boots
 */
const outfit2 = {
  jacket: "green bomber",
  tShirt: "white crew-neck",
  boots: "brown leather boots",
};
/**
 * @type {Object}
 * @property {string} hoodie
 * @property {string} joggers
 * @property {string} sneakers
 */
const outfit3 = {
  hoodie: "gray zip-up hoodie",
  joggers: "navy sweatpants",
  sneakers: "black running shoes",
};
/**
 * @type {Object}
 * @property {string} blouse
 * @property {string} skirt
 * @property {string} heels
 */
const outfit4 = {
  blouse: "red silk blouse",
  skirt: "plaid mini skirt",
  heels: "black pumps",
};
/**
 * @type {Object}
 * @property {string} vest
 * @property {string} shirt
 * @property {string} trousers
 */
const outfit5 = {
  vest: "beige knit vest",
  shirt: "striped long-sleeve",
  trousers: "dark khakis",
};

/**
 * @type {Array<Object>}
 * @description Array of outfit objects to assign to babies.
 */
const outfits = [outfit1, outfit2, outfit3, outfit4, outfit5];

/**
 * @function assignOutfits
 * @description Assigns an outfit to each baby in the babies array.
 * @param {Array<Baby>} babiesArr - The array of baby objects.
 * @param {Array<Outfit>} outfitsArr - The array of outfit objects.
 */
function assignOutfits(babiesArr, outfitsArr) {
  babiesArr.forEach((baby, i) => {
    baby.outfit = outfitsArr[i];
  });
}

// Assign outfits to babies
assignOutfits(babies, outfits);

console.log(babies);
