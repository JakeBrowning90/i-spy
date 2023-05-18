const getGameImage = () => {
    const gameField = document.querySelector('#gameField');
    const gameImage = document.createElement('div');
    gameImage.setAttribute("id", "gameImage");

    const targetGrid = document.createElement('div');
    targetGrid.setAttribute("id", "targetGrid");

    gameField.appendChild(gameImage);
    gameImage.appendChild(targetGrid);

}

export { getGameImage };

