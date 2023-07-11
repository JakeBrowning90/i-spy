import { clearContent } from "./clearContent";
import { drawScoreScreen } from "./drawScoreScreen";
import { addCheckmark } from "./tileMarkerController";
import { scoreboard, orderScores, drawPlayerNameInput } from "./scoreboardController";
import { calculateScore, markEndTime } from "./timeController";
import { db, getAnswerKey } from "./dbManager";

const answerKey = await getAnswerKey(db);

function resetFound() {
  for (let i = 0; i < answerKey.length; i++) {
    answerKey[i].found = false;
  }
}

function checkAnswer(charName, targetSquare) {

  const characterPickerSpace = document.querySelector('#characterPickerSpace');

  //console.log("Is " + charName + " at " + targetSquare.id + "?")
  let guess = answerKey.find(({ name }) => name === charName);
  if (guess.coords.includes(targetSquare.id) == true) {
    guess.found = true;
    addCheckmark(targetSquare);
    characterPickerSpace.textContent = "Correct!";

    if (endGameCheck() == true){

      //Save time at end of game
      markEndTime();

      // resetFound();
      
      //Check if player score is greater than greatest on scoreboard
      //Add player name and score to scoreboard, give prompt ONLY if player score qualifies.
      orderScores(scoreboard);
      let playerScore = calculateScore()
      if (playerScore < scoreboard[9].score) {
        drawPlayerNameInput(playerScore);
      } else {
        // Clear screen and go to scoreboard
        clearContent();
        drawScoreScreen();
      }
    }
  } else {
    console.log("Try again")
    characterPickerSpace.textContent = "Try again";
  }
};

function endGameCheck() {
  const hasBeenFound = (character) => character.found == true;
  return answerKey.every(hasBeenFound);
}

export { checkAnswer, answerKey, resetFound };