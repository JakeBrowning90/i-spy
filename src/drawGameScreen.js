import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";
import { getGameImage } from "./getGameImage";

const drawGameScreen = () => {
    const content = document.querySelector('#content');
    const gameScreenContent = document.createElement('div');
    gameScreenContent.classList.add('gameScreenContent');
    // gameScreenContent.textContent = "Game Screen"



    const gameControlDiv = document.createElement('div');
    gameControlDiv.setAttribute("id", "gameControlDiv");

    const gameInstructionDiv = document.createElement('div');
    gameInstructionDiv.setAttribute("id", "gameInstructionDiv");
    gameInstructionDiv.textContent = "Click an area of the picture to call the option list."

    const characterPickerSpace = document.createElement('div');
    characterPickerSpace.setAttribute("id", "characterPickerSpace");

    const homeScreenButton = document.createElement('button');
    homeScreenButton.textContent = "Back to Home";
    homeScreenButton.addEventListener("click", function () {
        clearContent();
        drawStartScreen();
    });

    const gameScreenDiv = document.createElement('div');
    gameScreenDiv.setAttribute("id", "gameScreenDiv");


    const gameField = document.createElement('div');
    gameField.setAttribute("id", "gameField");

    content.appendChild(gameScreenContent);
    // gameScreenContent.appendChild(homeScreenButton);
    gameScreenContent.appendChild(gameControlDiv);
    gameControlDiv.appendChild(gameInstructionDiv)
    gameControlDiv.appendChild(characterPickerSpace)
    gameControlDiv.appendChild(homeScreenButton)
    gameScreenContent.appendChild(gameScreenDiv);
    gameScreenDiv.appendChild(gameField);

    getGameImage();
}

export { drawGameScreen };

