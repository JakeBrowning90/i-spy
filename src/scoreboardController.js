import { drawScoreScreen } from "./drawScoreScreen";
import { clearContent } from "./clearContent";

let scoreboard = [
    {name: "AAA", score: 100},
    {name: "BBB", score: 120},
    {name: "CCC", score: 140},
    {name: "DDD", score: 160},
    {name: "EEE", score: 180},
    {name: "FFF", score: 200},
    {name: "GGG", score: 220},
    {name: "HHH", score: 240},
    {name: "III", score: 260},
    {name: "JJJ", score: 280},
  ]

// let scoreboard = [
//   {name: "AAA", score: 1},
//   {name: "BBB", score: 2},
//   {name: "CCC", score: 3},
//   {name: "DDD", score: 4},
//   {name: "EEE", score: 5},
//   {name: "FFF", score: 6},
//   {name: "GGG", score: 7},
//   {name: "HHH", score: 8},
//   {name: "III", score: 9},
//   {name: "JJJ", score: 10},
// ]

const drawPlayerNameInput = (playerScore) => {
  const gameField = document.getElementById("gameField")
  // const characterPickerSpace = document.querySelector('#characterPickerSpace');
  while (gameField.firstChild) {
    gameField.removeChild(gameField.firstChild);
  }

  const playerNameInputDiv = document.createElement('div');
  playerNameInputDiv.setAttribute('id','playerNameInputDiv');
  playerNameInputDiv.classList.add('blueBlock');
  playerNameInputDiv.textContent = "Well done! Enter your name for the scoreboard!";

  const playerNameInput = document.createElement("input");
  playerNameInput.setAttribute("required", "");
  playerNameInput.setAttribute("id", "playerNameInput");
  playerNameInput.setAttribute("name", "playerNameInput");

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.addEventListener("click", function () {
    // event.preventDefault();
    // let enteredName = playerNameInput.value; 
    scoreboard.push({name: playerNameInput.value, score: playerScore})
    orderScores(scoreboard)
    scoreboard = scoreboard.slice(0, 10);
    clearContent();
    drawScoreScreen();
  });
  // let enteredName = prompt("You're a top 10 player! Enter your name:")
  // scoreboard.push({name: enteredName, score: playerScore})

  gameField.appendChild(playerNameInputDiv);
  playerNameInputDiv.appendChild(playerNameInput)
  playerNameInputDiv.appendChild(submitButton)
}

const orderScores = (scoreboard) => {
  scoreboard.sort((a, b) => a.score - b.score)
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