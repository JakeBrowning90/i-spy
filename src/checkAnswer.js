import { clearContent } from "./clearContent";
import { drawScoreScreen } from "./drawScoreScreen";
import { addCheckmark } from "./tileMarkerController";
import { scoreboard, orderScores } from "./scoreboardController";
import { calculateScore, markEndTime } from "./timeController";

const answerKey = [
  {name: "Clock", found: false, coords: ['9,55']},
  {name: "Birdhouse", found: false, coords: ['25,47', '25,48', '26,47', '26,48']},
  {name: "Duck", found: false, coords: ['31,34', '31,35', '32,33', '32,34', '32,35', '33,34']},
  {name: "Thimble (tower)", found: false, coords: ['10,53', '10,54']},
  {name: "Thimble (truck)", found: false, coords: ['29,51', '30,51']},
  {name: "Thimble (bicycle)", found: false, coords: ['34,52']},
  {name: "Thimble (left gate)", found: false, coords:  ['34,23']},
  {name: "Thimble (right gate)", found: false, coords:  ['34,27', '35,27']},
  {name: "Plane", found: false, coords:  [ '5,22', '5,23', '5,24', '6,23']},
  {name: "Two fish in a truck", found: false, coords:  ['23,44', '23,45', '23,46']},
  {name: "Big red apple", found: false, coords: ['9,48', '10,48']},
  {name: "Zebra jeep", found: false, coords: ['22,5', '22,6', '23,5', '23,6', '23,7']},
  {name: "STOP", found: false, coords: ['17,7']},
  {name: "GO", found: false, coords: ['28,40']},
  {name: "BEEP (left)", found: false, coords: ['11,6', '11,7', '12,6', '12,7', '13,6', '13,7', '14,6', '14,7', '15,6', '15,7']},
  {name: "BEEP (center)", found: false, coords: ['15,22', '16,22', '17,22', '18,22', '19,22']},
  {name: "BEEP (right)", found: false, coords: ['10,60', '10,61', '11,60', '11,61', '12,60', '12,61', '13,60', '13,61']},
]

function resetFound() {
  for (let i = 0; i < answerKey.length; i++) {
    answerKey[i].found = false;
  }
}

function checkAnswer(charName, targetSquare) {

  const feedbackDiv = document.querySelector('#feedbackDiv');

  console.log("Is " + charName + " at " + targetSquare.id + "?")
  let guess = answerKey.find(({ name }) => name === charName);
  if (guess.coords.includes(targetSquare.id) == true) {
    console.log("Correct!");
    guess.found = true;
    addCheckmark(targetSquare);
    feedbackDiv.textContent = "Correct!";

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
    feedbackDiv.textContent = "Try again";
  }
};

function endGameCheck() {
  const hasBeenFound = (character) => character.found == true;
  return answerKey.every(hasBeenFound);
}

export { checkAnswer, answerKey, resetFound };