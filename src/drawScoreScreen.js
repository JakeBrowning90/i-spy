import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";
import { scoreboard, orderScores, drawScores } from "./scoreboardController";

const drawScoreScreen = () => {
    const content = document.querySelector('#content');
    const scoreScreenContent = document.createElement('div');
    scoreScreenContent.classList.add('scoreScreenContent');
    scoreScreenContent.textContent = "Score Screen"

    const homeScreenButton = document.createElement('button');
    homeScreenButton.textContent = "Back to Home";
    homeScreenButton.addEventListener("click", function () {
        clearContent();
        drawStartScreen();
    });

    const scoreDisplayDiv = document.createElement('div'); 
    scoreDisplayDiv.setAttribute("id", "scoreDisplayDiv")  

    content.appendChild(scoreScreenContent);
    scoreScreenContent.appendChild(homeScreenButton);
    scoreScreenContent.appendChild(scoreDisplayDiv);

    //TODO: function to display scores from array on scoreDisplayDiv
    //sort scores and player by descending score value
    orderScores(scoreboard);
    drawScores(scoreboard);
}

export { drawScoreScreen };