import { gameStartTime, markStartTime } from "./timeController";
import { drawCharacterPicker, removeCharacterPicker } from "./characterPickerController";
import { addMarker, removeMarker } from "./tileMarkerController";
import { resetFound } from "./checkAnswer";
// import iSpyLevers from './img/iSpyLevers.jpeg';
import { getName } from "./gridNames";

const getGameImage = () => {
    resetFound();
    //Begin tracking time on image load
    markStartTime();
    console.log(gameStartTime)

    const gameScreenDiv = document.querySelector('#gameScreenDiv');

    const gameField = document.querySelector('#gameField');
    const gameImage = document.createElement('div');
    // gameImage.src = '../img/iSpyLevers.jpeg'
    gameImage.setAttribute("id", "gameImage");

    // const gameImage = new Image();
    // gameImage.src = iSpyLevers;
    // gameImage.setAttribute("id", "gameImage");
    
    const targetGrid = document.createElement('div');
    targetGrid.setAttribute("id", "targetGrid");

    // gameField.appendChild(gameImage);
    gameField.appendChild(targetGrid);

    // gameImage.appendChild(targetGrid);

    for (let i = 0; i < 36; i++) {
        for (let j = 0; j < 64; j++) {
            let targetSquare = document.createElement("div");
            targetSquare.classList.add("targetSquare");
            targetSquare.setAttribute("id", `${[i, j]}`);
            targetSquare.addEventListener('click', () => {
                // getName(targetSquare.id)
                // Draw characterPicker if none, else remove if already present
                const characterPicker = document.querySelector('#characterPicker');
                if (characterPicker == null) {
                    addMarker(targetSquare)
                    drawCharacterPicker(targetSquare) 
                } else {
                    removeMarker();
                    removeCharacterPicker()
                };

            });
            targetGrid.appendChild(targetSquare);
        }
    }
}

export { getGameImage };

