const characterList = [
    "Homer",
    "Marge",
    "Bart",
    "Lisa",
    "Maggie",
    "Santa's Little Helper",
    "Snowball II"
];

const drawCharacterPicker = () => {
    const targetGrid = document.querySelector('#targetGrid');
    const characterPicker = document.createElement('div');
    characterPicker.setAttribute("id", "characterPicker");

    targetGrid.appendChild(characterPicker);

}

export { drawCharacterPicker };

