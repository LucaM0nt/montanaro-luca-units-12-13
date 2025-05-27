/**
 * @file main.js
 * @description Demonstrates object and array manipulation by modeling babies, their outfits, and feeding them with randomized favorite foods.
 * @author Luca Montanaro
 * @date May, 2025
 *
 * @remarks
 * This script defines an array of baby objects, each with properties such as name, age in months, noises, favorite foods, and outfit.
 * It provides functions to describe a baby's outfit and to simulate feeding a baby with their favorite foods in random order.
 * Both functions are run for each baby and the results are printed to the console.
 */

/**
 * @typedef {Object} Baby
 * @property {string} name - Baby's name
 * @property {number} months - Baby's age in months
 * @property {Array<string>} noises - Array of noises the baby makes
 * @property {Array<string>} favoriteFoods - Array of baby's favorite foods
 * @property {Outfit} outfit - Baby's outfit
 */
const babies = [
  {
    name: "Glory",
    months: 12,
    noises: ["ma-ma", "la-la", "ba"],
    favoriteFoods: ["ramen", "banana", "yogurt"],
    outfit: {
      shirt: "blue t-shirt",
      pants: "black jeans",
      shoes: "white sneakers",
    },
  },
  {
    name: "Luna",
    months: 6,
    noises: ["goo", "ga", "babble"],
    favoriteFoods: ["mashed banana", "rice cereal", "applesauce"],
    outfit: {
      jacket: "green bomber",
      tShirt: "white crew-neck",
      boots: "brown leather boots",
    },
  },
  {
    name: "Max",
    months: 9,
    noises: ["giggle", "coo", "da-da"],
    favoriteFoods: ["pureed carrots", "apple sauce", "oatmeal"],
    outfit: {
      hoodie: "gray zip-up hoodie",
      joggers: "navy sweatpants",
      sneakers: "black running shoes",
    },
  },
  {
    name: "Leo",
    months: 8,
    noises: ["hee", "ahh", "gurgle"],
    favoriteFoods: ["pureed peas", "avocado", "sweet potato"],
    outfit: {
      blouse: "red silk blouse",
      skirt: "plaid mini skirt",
      heels: "black pumps",
    },
  },
  {
    name: "Badr Jr.",
    months: 2,
    noises: ["cheee", "lol", "bruh"],
    favoriteFoods: ["hamburger", "pizza", "milk"],
    outfit: {
      vest: "beige knit vest",
      shirt: "striped long-sleeve",
      trousers: "dark khakis",
    },
  },
];

/**
 * Randomizes the order of elements in an array.
 * @function randomiseArray
 * @param {Array<any>} array - The array to randomize (will not mutate the original).
 * @returns {Array<any>} A new array with the elements in random order.
 */
function randomiseArray(array) {
  // Create a shallow copy to avoid mutating the original array
  const result = [];
  let arrCopy = array.slice();
  while (arrCopy.length > 0) {
    const idx = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy.splice(idx, 1)[0]);
  }
  return result;
}

/**
 * Returns a string describing the baby's outfit.
 * @function getBabyOutfit
 * @param {Baby} baby - The baby object.
 * @returns {string} Description of the baby's outfit.
 * @example
 * // returns "Lyla is wearing a blue shirt and red pants and a green hat"
 * getBabyOutfit(baby);
 */
function getBabyOutfit(baby) {
  // Get all clothing items from the outfit object and join them in a readable string
  const babyClothes = Object.values(baby.outfit);
  return `${baby.name} is wearing a ${babyClothes.join(" and ")}`;
}

/**
 * Returns a string describing what the baby is eating, with foods in random order.
 * @function feedBaby
 * @param {Baby} baby - The baby object.
 * @returns {string} Description of what the baby is eating.
 * @example
 * // returns "Lyla is eating food3 and food1 and food2"
 * feedBaby(baby);
 */
function feedBaby(baby) {
  // Copy favoriteFoods to avoid mutation, randomize, and join for output
  const babyFood = baby.favoriteFoods.slice();
  const randomBabyFood = randomiseArray(babyFood);
  return `${baby.name} is eating ${randomBabyFood.join(" and ")}`;
}

// Run both functions on all babies and print the results
babies.forEach((baby) => {
  // Print the baby's outfit description
  console.log(getBabyOutfit(baby));
  // Print the randomized food description
  console.log(feedBaby(baby));
  // Print a blank line for readability
  console.log("\n");
});
