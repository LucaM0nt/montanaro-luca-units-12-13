const babies = [
    {
        name: 'Glory',
        months: 12,
        noises: [ 'ma-ma', 'la-la', 'ba' ],
        favoriteFoods: [ 'ramen', 'banana', 'yogurt' ],
        outfit: {
            shirt: 'blue t-shirt',
            pants: 'black jeans',
            shoes: 'white sneakers'
        }
    },
    {
        name: 'Luna',
        months: 6,
        noises: [ 'goo', 'ga', 'babble' ],
        favoriteFoods: [ 'mashed banana', 'rice cereal', 'applesauce' ],
        outfit: {
            jacket: 'green bomber',
            tShirt: 'white crew-neck',
            boots: 'brown leather boots'
        }
    },
    {
        name: 'Max',
        months: 9,
        noises: [ 'giggle', 'coo', 'da-da' ],
        favoriteFoods: [ 'pureed carrots', 'apple sauce', 'oatmeal' ],
        outfit: {
            hoodie: 'gray zip-up hoodie',
            joggers: 'navy sweatpants',
            sneakers: 'black running shoes'
        }
    },
    {
        name: 'Leo',
        months: 8,
        noises: [ 'hee', 'ahh', 'gurgle' ],
        favoriteFoods: [ 'pureed peas', 'avocado', 'sweet potato' ],
        outfit: {
            blouse: 'red silk blouse',
            skirt: 'plaid mini skirt',
            heels: 'black pumps'
        }
    },
    {
        name: 'Badr Jr.',
        months: 2,
        noises: [ 'cheee', 'lol', 'bruh' ],
        favoriteFoods: [ 'hamburger', 'pizza', 'milk' ],
        outfit: {
            vest: 'beige knit vest',
            shirt: 'striped long-sleeve',
            trousers: 'dark khakis'
        }
    }
]

function randomiseArray(array){
    const result = [];
    while (array.length > 0) {
        const idx = Math.floor(Math.random() * array.length);
        result.push(array.splice(idx, 1)[0]);
    }
    return result;
}

function getBabyOutfit(baby){
    const babyClothes = Object.values(baby.outfit);
    return `${baby.name} is wearing a ${babyClothes.join(' and ')}`;
}

function feedBaby(baby){
    const babyFood = Object.values(baby.favoriteFoods);
    randomBabyFood = randomiseArray(babyFood);
    return `${baby.name} is eating ${randomBabyFood.join(' and ')}`;
}

babies.forEach(baby=>{
    console.log(getBabyOutfit(baby))
    console.log(feedBaby(baby))
    console.log("\n")
})
