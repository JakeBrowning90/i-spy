import { checkAnswer, answerKey } from "./checkAnswer";
import { removeMarker } from "./tileMarkerController";

const drawCharacterPicker = (targetSquare) => {
    const characterPickerSpace = document.querySelector('#characterPickerSpace');
    const characterPicker = document.createElement('div');
    characterPicker.setAttribute("id", "characterPicker");
    characterPicker.textContent = "What is this?";
    const dropList = document.createElement('select');
    for (let i = 0; i < answerKey.length; i++) {
        let character = answerKey[i];
        if (character.found == false) {
            let option = document.createElement("option");
            option.textContent = character.name;
            option.setAttribute('value', character.name);
            dropList.appendChild(option);
        }
    }

    const checkButton = document.createElement('button');
    checkButton.textContent = "Check!";
    checkButton.addEventListener('click', () => {
        // Test passing clicked square and character name from drop menu
        removeCharacterPicker();
        removeMarker();
        checkAnswer(dropList.value, targetSquare)
        
    });


    characterPicker.appendChild(dropList);
    characterPicker.appendChild(checkButton);
    characterPickerSpace.appendChild(characterPicker);
}

const removeCharacterPicker = () => {
    const characterPickerSpace = document.querySelector('#characterPickerSpace');
    const characterPicker = document.querySelector('#characterPicker');

    characterPickerSpace.removeChild(characterPicker);
}

export { drawCharacterPicker, removeCharacterPicker };

