const addMarker = (tile) => {
    const targetMarker = document.createElement("div");
    targetMarker.setAttribute("id", "targetMarker");
    tile.appendChild(targetMarker);
}

const addCheckmark = (tile) => {
    const checkmark = document.createElement("div");
    checkmark.setAttribute("class", "checkmark");
    tile.appendChild(checkmark);
}

const removeMarker = () => {
    const targetMarker = document.querySelector('#targetMarker');
    targetMarker.remove();
}

export { addMarker, addCheckmark, removeMarker };

