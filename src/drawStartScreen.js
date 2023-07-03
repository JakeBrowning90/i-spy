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

    const instructionDiv = document.createElement('ul');
    instructionDiv.classList.add('instructionDiv');

    const instructionHeader = document.createElement('h2');
    instructionHeader.textContent = "Instructions:"

    const instruct1 = document.createElement('li');
    instruct1.textContent = "Locate all the items named in the riddle."
    const instruct2 = document.createElement('li');
    instruct2.textContent = "Click on an area of the picture to guess which item is there."
    const instruct3 = document.createElement('li');
    instruct3.textContent = "Find every item fast enough to get on the scoreboard!"

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
    instructionDiv.appendChild(instructionHeader);
    instructionDiv.appendChild(instruct1);
    instructionDiv.appendChild(instruct2);
    instructionDiv.appendChild(instruct3);

    startScreenContent.appendChild(startGameButton);
    startScreenContent.appendChild(viewScoresButton);
}

export { drawStartScreen };