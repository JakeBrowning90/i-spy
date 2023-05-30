const characterList = [
    "Homer",
    "Marge",
    "Bart",
    "Lisa",
    "Maggie",
    "Santa's Little Helper",
    "Snowball II"
];

const characterPickerCheck = (targetSquare) => {
    const characterPicker = document.querySelector('#characterPicker');
    if (characterPicker != null) {
        removeCharacterPicker()
    } else {
        drawCharacterPicker(targetSquare)
    }
}

const drawCharacterPicker = (targetSquare) => {
    const gameScreenContent = document.querySelector('.gameScreenContent');
    const characterPicker = document.createElement('div');
    characterPicker.setAttribute("id", "characterPicker");

    const dropList = document.createElement('select');
    for (var i = 0; i < characterList.length; i++) {
        let character = characterList[i];
        let option = document.createElement("option");
        option.textContent = character;
        option.setAttribute('value', character);
        dropList.appendChild(option);
    }

    const checkButton = document.createElement('button');
    checkButton.textContent = "Check!";
    checkButton.addEventListener('click', () => {
        console.log(dropList.value, targetSquare)
        removeCharacterPicker();
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

export { characterPickerCheck, drawCharacterPicker, removeCharacterPicker };

