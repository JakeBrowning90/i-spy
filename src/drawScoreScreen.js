import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";
import { scoreboard, orderScores, drawScores } from "./scoreboardController";

const drawScoreScreen = () => {
    const content = document.querySelector('#content');
    const scoreScreenBackground = document.createElement('div');
    scoreScreenBackground.classList.add('scoreScreenBackground');

    const scoreScreenContent = document.createElement('div');
    scoreScreenContent.classList.add('scoreScreenContent');

    const scoreTitleDiv = document.createElement('h2');
    scoreTitleDiv.classList.add('scoreTitleDiv');
    scoreTitleDiv.textContent = "Fastest Finders"

    const scoreDisplayDiv = document.createElement('div'); 
    scoreDisplayDiv.classList.add('blueBlock');
    scoreDisplayDiv.setAttribute("id", "scoreDisplayDiv")  

    const homeScreenButton = document.createElement('button');
    homeScreenButton.textContent = "Back to Home";
    homeScreenButton.setAttribute('id', 'scoreScreenHomeButton')
    homeScreenButton.addEventListener("click", function () {
        clearContent();
        drawStartScreen();
    });

    content.appendChild(scoreScreenBackground);
    scoreScreenBackground.appendChild(scoreScreenContent);
    // scoreScreenContent.appendChild(scoreTitleDiv);
    scoreScreenContent.appendChild(scoreDisplayDiv);
    scoreDisplayDiv.appendChild(scoreTitleDiv);

    scoreScreenContent.appendChild(homeScreenButton);

    //function to display scores from array on scoreDisplayDiv
    //sort scores and player by descending score value
    orderScores(scoreboard);
    drawScores(scoreboard);
}

export { drawScoreScreen };