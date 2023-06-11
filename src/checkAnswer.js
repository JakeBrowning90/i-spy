import { clearContent } from "./clearContent";
import { drawScoreScreen } from "./drawScoreScreen";
import { addCheckmark } from "./tileMarkerController";

const answerKey = [
  {name: "Homer", found: false, coords: ["5,9", "5,10"]},
  {name: "Marge", found: false, coords: ['6,6']},
  {name: "Bart", found: false, coords: ['13,2']},
  {name: "Lisa", found: false, coords: ['12,13']},
  {name: "Maggie", found: false, coords: ['8,7']},
  {name: "Santa's Little Helper", found: false, coords: ['13,5']},
  {name: "Snowball II", found: false, coords: ['16,12']},
]

function resetFound() {
  for (let i = 0; i < answerKey.length; i++) {
    answerKey[i].found = false;
  }
}

function checkAnswer(charName, targetSquare) {
  console.log("Is " + charName + " at " + targetSquare.id + "?")
  let guess = answerKey.find(({ name }) => name === charName);
  if (guess.coords.includes(targetSquare.id) == true) {
    console.log("Correct!")
    guess.found = true;
    //TODO: Mark tile with green check
    addCheckmark(targetSquare);

    if (endGameCheck() == true){
      resetFound();
      clearContent();
      drawScoreScreen();
    }
  } else {
    console.log("Try again")
  }
};

function endGameCheck() {
  const hasBeenFound = (character) => character.found == true;
  return answerKey.every(hasBeenFound);
}

export { checkAnswer, answerKey, resetFound };