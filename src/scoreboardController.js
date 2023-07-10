import { drawScoreScreen } from "./drawScoreScreen";
import { clearContent } from "./clearContent";

import {db, ScoreEntry, getScoreboard, addNewScore} from "./dbManager";

let scoreboard = await getScoreboard(db);

// let scoreboard = [
//     {name: "AAA", score: 100},
//     {name: "BBB", score: 120},
//     {name: "CCC", score: 140},
//     {name: "DDD", score: 160},
//     {name: "EEE", score: 180},
//     {name: "FFF", score: 200},
//     {name: "GGG", score: 220},
//     {name: "HHH", score: 240},
//     {name: "III", score: 260},
//     {name: "JJJ", score: 280},
//   ]


const drawPlayerNameInput = (playerScore) => {
  const gameField = document.getElementById("gameField")
  // const characterPickerSpace = document.querySelector('#characterPickerSpace');
  while (gameField.firstChild) {
    gameField.removeChild(gameField.firstChild);
  }

  const transLayer = document.createElement('div');
  transLayer.setAttribute('id','transLayer');

  const playerNameInputForm = document.createElement('form');
  playerNameInputForm.setAttribute('id','playerNameInputForm');
  playerNameInputForm.classList.add('blueBlock');
  playerNameInputForm.textContent = "Great job, you got a high score!";

  const inputDiv = document.createElement("div");

  const playerNameLabel = document.createElement("label");
  playerNameLabel.setAttribute("for", "playerNameInput");
  playerNameLabel.textContent = "Enter your name: ";

  const playerNameInput = document.createElement("input");
  playerNameInput.setAttribute("id", "playerNameInput");
  playerNameInput.setAttribute("name", "playerNameInput");
  playerNameInput.setAttribute("required", "");
  playerNameInput.setAttribute("maxlength", "10");

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "nameEntrySubmitButton");


  playerNameInputForm.appendChild(inputDiv)
  inputDiv.appendChild(playerNameLabel)
  inputDiv.appendChild(playerNameInput)
  playerNameInputForm.appendChild(submitButton)

  playerNameInputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // scoreboard.push({name: playerNameInput.value, score: playerScore})
    let newScore = new ScoreEntry (playerNameInput.value, playerScore);
    addNewScore(newScore)
    orderScores(scoreboard)
    scoreboard = scoreboard.slice(0, 10);
    clearContent();
    drawScoreScreen();
  });
  // let enteredName = prompt("You're a top 10 player! Enter your name:")
  // scoreboard.push({name: enteredName, score: playerScore})

  gameField.appendChild(transLayer);
  transLayer.appendChild(playerNameInputForm);
}

const orderScores = (scoreboard) => {
  scoreboard.sort((a, b) => a.score - b.score);
  return scoreboard;
}

const drawScores = (scoreboard) => {
  const scoreDisplayDiv = document.querySelector("#scoreDisplayDiv")
  for (let i = 0; i < scoreboard.length; i++) {
    let entry = scoreboard[i];
    let displayedName = document.createElement('div');
    let displayedScore = document.createElement('div');
    displayedName.textContent = i + 1 + ". "+ entry.name + ":";
    displayedScore.textContent = entry.score;
    scoreDisplayDiv.appendChild(displayedName);
    scoreDisplayDiv.appendChild(displayedScore);
  }
}
  
export { scoreboard, orderScores, drawScores, drawPlayerNameInput }