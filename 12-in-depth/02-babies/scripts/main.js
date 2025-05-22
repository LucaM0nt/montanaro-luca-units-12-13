// Create an empty array of babies
let babies = [];

// Create 5 baby objects
const baby1 = {
  name: "Luna",
  months: 6,
  noises: ["goo", "ga", "babble"],
  favoriteFoods: ["mashed banana", "rice cereal"],
};
const baby2 = {
  name: "Max",
  months: 9,
  noises: ["giggle", "coo", "da-da"],
  favoriteFoods: ["pureed carrots", "apple sauce"],
};
const baby3 = {
  name: "Glory",
  months: 12,
  noises: ["ma-ma", "la-la", "ba"],
  favoriteFoods: ["ramen", "banana"],
};
const baby4 = {
  name: "Leo",
  months: 8,
  noises: ["hee", "ahh", "gurgle"],
  favoriteFoods: ["pureed peas", "avocado"],
};
const baby5 = {
  name: "Badr Jr.",
  months: 2,
  noises: ["cheee", "lol", "bruh"],
  favoriteFoods: ["hamburger", "pizza"],
};

babies.push(baby1);
babies.splice(1, 0, baby2);
babies.unshift(baby3);
babies[3] = baby4;
babies = [...babies, baby5];

for (baby of babies) {
  for (key in baby) {
    console.log(key + ": " + baby[key]);
  }
  console.log("\n")
}

const outfit1 = {
  shirt: "blue t-shirt",
  pants: "black jeans",
  shoes: "white sneakers"
};
const outfit2 = {
  jacket: "green bomber",
  tShirt: "white crew-neck",
  boots: "brown leather boots"
};
const outfit3 = {
  hoodie: "gray zip-up hoodie",
  joggers: "navy sweatpants",
  sneakers: "black running shoes"
};
const outfit4 = {
  blouse: "red silk blouse",
  skirt: "plaid mini skirt",
  heels: "black pumps"
};
const outfit5 = {
  vest: "beige knit vest",
  shirt: "striped long-sleeve",
  trousers: "dark khakis"
};

const outfits = [outfit1, outfit2, outfit3, outfit4, outfit5];
for (let i = 0; i < babies.length; i++) {
    babies[i].outfit = outfits[i];
}

console.log(babies)