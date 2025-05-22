let noisesArray = ["quack", "sneeze", "boom"];

const finalArray = [];

function wordToArray(word, letterIndex) {
  let newWord =
    word
      .split("")
      .map((lettera, indice) => {
        return indice === letterIndex ? lettera.toUpperCase() : lettera;
      })
      .join("") + "!".repeat(letterIndex + 1);
  return newWord;
}

noisesArray.forEach(currentWord => {
  let = splittedWord = currentWord.split("");
  splittedWord.forEach((__, letterIndex) => {
    finalArray.push(wordToArray(currentWord, letterIndex));
  });
});

console.log(finalArray)