import { clearContent } from "./clearContent";
import { drawStartScreen } from "./drawStartScreen";
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

    //TODO - reduce poem to function
    const itemPoem = document.createElement('ul');
    itemPoem.setAttribute("id", "itemPoem");
    const itemClock = document.createElement('li');
    itemClock.textContent = "a clock,"
    const itemBirdhouse = document.createElement('li');
    itemBirdhouse.textContent = "a birdhouse,"
    const itemDuck = document.createElement('li');
    itemDuck.textContent = "a duck,"
    const itemThimbles = document.createElement('li');
    itemThimbles.textContent = "five thimbles,"
    const itemPlane = document.createElement('li');
    itemPlane.textContent = "a plane,"
    const itemFish = document.createElement('li');
    itemFish.textContent = "two fish in a truck;"
    const itemApple = document.createElement('li');
    itemApple.textContent = "A big red apple,"
    const itemJeep = document.createElement('li');
    itemJeep.textContent = "a zebra jeep,"
    const itemStop = document.createElement('li');
    itemStop.textContent = "STOP,"
    const itemGo = document.createElement('li');
    itemGo.textContent = "GO,"
    const itemBeep= document.createElement('li');
    itemBeep.textContent = "and BEEP BEEP BEEP."

    itemPoem.appendChild(itemClock)
    itemPoem.appendChild(itemBirdhouse)
    itemPoem.appendChild(itemDuck)
    itemPoem.appendChild(itemThimbles)
    itemPoem.appendChild(itemPlane)
    itemPoem.appendChild(itemFish)
    itemPoem.appendChild(itemApple)
    itemPoem.appendChild(itemJeep)
    itemPoem.appendChild(itemStop)
    itemPoem.appendChild(itemGo)
    itemPoem.appendChild(itemBeep)

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
    gameInstructionDiv.appendChild(itemPoem)
    gameControlDiv.appendChild(characterPickerSpace)
    gameControlDiv.appendChild(homeScreenButton)
    gameScreenContent.appendChild(gameScreenDiv);
    gameScreenDiv.appendChild(gameField);

    getGameImage();
}

export { drawGameScreen };

