import { drawCharacterPicker, removeCharacterPicker } from "./characterPickerController";
import { addMarker, removeMarker } from "./tileMarkerController";
import { getName } from "./gridNames";

const getGameImage = () => {
    const gameField = document.querySelector('#gameField');
    const gameImage = document.createElement('div');
    gameImage.setAttribute("id", "gameImage");

    const targetGrid = document.createElement('div');
    targetGrid.setAttribute("id", "targetGrid");

    gameField.appendChild(gameImage);
    gameImage.appendChild(targetGrid);

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let targetSquare = document.createElement("div");
            targetSquare.classList.add("targetSquare");
            targetSquare.setAttribute("id", `${[i, j]}`);
            targetSquare.addEventListener('click', () => {
                // getName(targetSquare.id)
                // Draw characterPicker if none, else remove if already present
                const characterPicker = document.querySelector('#characterPicker');
                if (characterPicker == null) {
                    //TODO - add selection indicator to clicked square
                    // const targetMarker = document.createElement("div");
                    // targetMarker.setAttribute("id", "targetMarker");
                    // targetSquare.appendChild(targetMarker);
                    addMarker(targetSquare)
                    drawCharacterPicker(targetSquare.id) 
                } else {
                    //TODO - remove selection indicator
                    // const targetMarker = document.querySelector('#targetMarker');
                    // targetMarker.remove();
                    removeMarker();
                    removeCharacterPicker()
                };

            });
            targetGrid.appendChild(targetSquare);
        }
    }
}

export { getGameImage };

