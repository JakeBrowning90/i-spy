const answerKey = [
  {name: "Homer", coords: ["5,9", "5,10"]},
  {name: "Marge", coords: ['6,6']},
  {name: "Bart", coords: ['13,2']},
  {name: "Lisa", coords: ['12,13']},
  {name: "Maggie", coords: ['8,7']},
  {name: "Santa's Little Helper", coords: ['13,5']},
  {name: "Snowball II", coords: ['16,12']},
]

function checkAnswer(charName, coordGuess) {
  console.log("Is " + charName + " at " + coordGuess + "?")
  let guess = answerKey.find(({ name }) => name === charName);
  if (guess.coords.includes(coordGuess) == true) {
    console.log("Correct!")
  } else {
    console.log("Try again")
  }
};

export { checkAnswer };