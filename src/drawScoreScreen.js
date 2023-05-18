import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";

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

    content.appendChild(scoreScreenContent);
    scoreScreenContent.appendChild(homeScreenButton);
}

export { drawScoreScreen };

