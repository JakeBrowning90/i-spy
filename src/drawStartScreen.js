import { clearContent } from "./clearContent";
import { drawGameScreen } from "./drawGameScreen";
import { drawScoreScreen } from "./drawScoreScreen";

const drawStartScreen = () => {
    const content = document.querySelector('#content');
    const startScreenBackground = document.createElement('div');
    startScreenBackground.classList.add('startScreenBackground');

    const startScreenContent = document.createElement('div');
    startScreenContent.classList.add('startScreenContent');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    titleDiv.textContent = "Geography Quiz"

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
    // startScreenBackground.appendChild(titleDiv);
    // startScreenBackground.appendChild(startGameButton);
    // startScreenBackground.appendChild(viewScoresButton);
}

export { drawStartScreen };