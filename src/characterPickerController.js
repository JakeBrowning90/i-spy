import { checkAnswer, answerKey } from "./checkAnswer";
import { removeMarker } from "./tileMarkerController";

// const characterList = [
//     "Homer",
//     "Marge",
//     "Bart",
//     "Lisa",
//     "Maggie",
//     "Santa's Little Helper",
//     "Snowball II"
// ];

// const characterPickerCheck = (targetSquare) => {
//     const characterPicker = document.querySelector('#characterPicker');
//     if (characterPicker != null) {
//         removeCharacterPicker()
//     } else {
//         drawCharacterPicker(targetSquare)
//     }
// }

const drawCharacterPicker = (targetSquare) => {
    const gameScreenContent = document.querySelector('.gameScreenContent');
    const characterPicker = document.createElement('div');
    characterPicker.setAttribute("id", "characterPicker");
    characterPicker.textContent = "Who is this?";
    const dropList = document.createElement('select');
    for (var i = 0; i < answerKey.length; i++) {
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
        checkAnswer(dropList.value, targetSquare)
        removeCharacterPicker();
        removeMarker();
    });


    characterPicker.appendChild(dropList);
    characterPicker.appendChild(checkButton);
    gameScreenContent.appendChild(characterPicker);
}

const removeCharacterPicker = () => {
    const gameScreenContent = document.querySelector('.gameScreenContent');
    const characterPicker = document.querySelector('#characterPicker');

    gameScreenContent.removeChild(characterPicker);
}

export { drawCharacterPicker, removeCharacterPicker };

