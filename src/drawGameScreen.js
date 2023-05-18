import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";
import { getGameImage } from "./getGameImage";

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

    const gameField = document.createElement('div');
    gameField.setAttribute("id", "gameField");

    content.appendChild(gameScreenContent);
    gameScreenContent.appendChild(homeScreenButton);
    gameScreenContent.appendChild(gameField);

    getGameImage();
}

export { drawGameScreen };

