import { clearContent } from "./clearContent";
import { drawScoreScreen } from "./drawScoreScreen";
import { addCheckmark } from "./tileMarkerController";
import { scoreboard, orderScores } from "./scoreboardController";
import { calculateScore, markEndTime } from "./timeController";

const answerKey = [
  {name: "Clock", found: false, coords: ["5,9", "5,10"]},
  {name: "Birdhouse", found: false, coords: ['6,6']},
  {name: "Duck", found: false, coords: ['13,2']},
  {name: "Thimble (tower)", found: false, coords: ['12,13']},
  {name: "Thimble (truck)", found: false, coords: ['12,13']},
  {name: "Thimble (bicycle)", found: false, coords: ['12,13']},
  {name: "Thimble (left gate)", found: false, coords: ['12,13']},
  {name: "Thimble (right gate)", found: false, coords: ['12,13']},
  {name: "Plane", found: false, coords: ['8,7']},
  {name: "Two fish in a truck", found: false, coords: ['13,5']},
  {name: "Big red apple", found: false, coords: ['16,12']},
  {name: "Zebra jeep", found: false, coords: ['16,12']},
  {name: "STOP", found: false, coords: ['16,12']},
  {name: "GO", found: false, coords: ['16,12']},
  {name: "BEEP (left)", found: false, coords: ['16,12']},
  {name: "BEEP (center)", found: false, coords: ['16,12']},
  {name: "BEEP (right)", found: false, coords: ['16,12']},
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

    addCheckmark(targetSquare);

    if (endGameCheck() == true){

      //Save time at end of game
      markEndTime();
      // console.log(calculateScore());

      resetFound();
      clearContent();

      //Add player name and score to scorebord
      let enteredName = prompt("Enter your name:")
      scoreboard.push({name: enteredName, score: calculateScore()})
      orderScores(scoreboard);
      //trim scoreboard to 10 entries
      scoreboard = scoreboard.slice(0, 10);

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