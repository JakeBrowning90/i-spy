import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";

const drawGameScreen = () => {
    const content = document.querySelector('#content');
    const gameScreenContent = document.createElement('div');
    gameScreenContent.classList.add('gameScreenContent');
    gameScreenContent.textContent = "Game Screen"

    const homeScreenButton = document.createElement('button');
    homeScreenButton.textContent = "Back to Home";
    homeScreenButton.addEventListener("click", function () {
        clearContent();
        drawStartScreen();
    });

    content.appendChild(gameScreenContent);
    gameScreenContent.appendChild(homeScreenButton);
}

export { drawGameScreen };

