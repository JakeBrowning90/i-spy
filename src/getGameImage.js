import { gameStartTime, markStartTime } from "./timeController";
import { drawCharacterPicker, removeCharacterPicker } from "./characterPickerController";
import { addMarker, removeMarker } from "./tileMarkerController";
import { resetFound } from "./checkAnswer";

const getGameImage = () => {
    resetFound();
    //Begin tracking time on image load
    markStartTime();
    console.log(gameStartTime)

    const gameField = document.querySelector('#gameField');
    
    const targetGrid = document.createElement('div');
    targetGrid.setAttribute("id", "targetGrid");

    gameField.appendChild(targetGrid);

    for (let i = 0; i < 36; i++) {
        for (let j = 0; j < 64; j++) {
            let targetSquare = document.createElement("div");
            targetSquare.classList.add("targetSquare");
            targetSquare.setAttribute("id", `${[i, j]}`);
            targetSquare.addEventListener('click', () => {
                const characterPickerSpace = document.querySelector('#characterPickerSpace');
                // Draw characterPicker if none, else remove if already present
                const characterPicker = document.querySelector('#characterPicker');
                if (characterPicker == null) {
                    characterPickerSpace.textContent = "";
                    addMarker(targetSquare)
                    drawCharacterPicker(targetSquare) 
                } else {
                    characterPickerSpace.textContent = "Click the hidden objects in the picture.";
                    removeMarker();
                    removeCharacterPicker()
                };

            });
            targetGrid.appendChild(targetSquare);
        }
    }
}

export { getGameImage };

