import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";
import { writePoem } from "./poemWriter";
import { getGameImage } from "./getGameImage";

const drawGameScreen = () => {
    const content = document.querySelector('#content');
    const gameScreenContent = document.createElement('div');
    gameScreenContent.classList.add('gameScreenContent');

    const gameControlDiv = document.createElement('div');
    gameControlDiv.setAttribute("id", "gameControlDiv");

    const gameInstructionDiv = document.createElement('div');
    gameInstructionDiv.setAttribute("id", "gameInstructionDiv");
    gameInstructionDiv.textContent = "I spy..."
    
    const itemPoem = document.createElement('ul');
    itemPoem.setAttribute("id", "itemPoem");

    const feedbackDiv = document.createElement('div');
    feedbackDiv.setAttribute("id", "feedbackDiv");
    feedbackDiv.textContent = "Click the hidden objects in the picture."

    const characterPickerSpace = document.createElement('div');
    characterPickerSpace.setAttribute("id", "characterPickerSpace");
    // characterPickerSpace.textContent = "Click the hidden objects in the picture."

    const homeScreenButton = document.createElement('button');
    homeScreenButton.textContent = "Back to Home";
    homeScreenButton.setAttribute("id", "gameScreenHomeButton");
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
    gameInstructionDiv.appendChild(itemPoem)
    writePoem();
    gameControlDiv.appendChild(feedbackDiv)
    gameControlDiv.appendChild(characterPickerSpace)
    gameControlDiv.appendChild(homeScreenButton)
    gameScreenContent.appendChild(gameScreenDiv);
    gameScreenDiv.appendChild(gameField);


    getGameImage();
}

export { drawGameScreen };

