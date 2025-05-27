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

// console.log(typeof employee.birth);
// console.log(typeof employee.bankInformation);
// console.log(typeof employee.provaArray);


function objectCopy(object) {
  const newObject = {};

  for (let property in object) {
    if (typeof object[property] === "object" && object[property] !== null) {
      // console.log(`${typeof object[property]} [Sono nell'if] ${property} is a ${Object.prototype.toString.call(object[property])}`);

      // Verifica se è una Date
      if (object[property] instanceof Date) {
        newObject[property] = new Date(object[property]);
      }
      // Verifica se è un Array
      else if (Array.isArray(object[property])) {
        newObject[property] = object[property].map(item =>
          typeof item === "object" && item !== null ? objectCopy(item) : item
        );
      }
      // Altrimenti è un oggetto semplice
      else {
        newObject[property] = objectCopy(object[property]);
      }
    } else {
      // console.log(`${typeof object[property]} [Sono nell'else] ${property} is a ${Object.prototype.toString.call(object[property])}`);
      newObject[property] = object[property];
    }
  }

  return newObject;
}

console.log(objectCopy(employee))