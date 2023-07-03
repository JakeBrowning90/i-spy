import { clearContent } from "./clearContent";
import { drawGameScreen } from "./drawGameScreen";
import { drawScoreScreen } from "./drawScoreScreen";

const drawStartScreen = () => {
    const content = document.querySelector('#content');
    const startScreenBackground = document.createElement('div');
    startScreenBackground.classList.add('startScreenBackground');

    const startScreenContent = document.createElement('div');
    startScreenContent.classList.add('startScreenContent');

    const titleDiv = document.createElement('h1');
    titleDiv.classList.add('titleDiv');
    titleDiv.textContent = "I Spy"

    const instructionDiv = document.createElement('div');
    instructionDiv.classList.add('instructionDiv');
    instructionDiv.textContent = "Instructions:"

    const startGameButton = document.createElement('button');
    startGameButton.textContent = "Start game";
    startGameButton.addEventListener("click", function () {
        clearContent();
        drawGameScreen();
    });

    const viewScoresButton = document.createElement('button');
    viewScoresButton.textContent = "View scoreboard";
    viewScoresButton.addEventListener("click", function () {
        clearContent();
        drawScoreScreen();
    });

    content.appendChild(startScreenBackground);
    startScreenBackground.appendChild(startScreenContent);
    startScreenContent.appendChild(titleDiv);
    startScreenContent.appendChild(instructionDiv);
    startScreenContent.appendChild(startGameButton);
    startScreenContent.appendChild(viewScoresButton);
}

export { drawStartScreen };