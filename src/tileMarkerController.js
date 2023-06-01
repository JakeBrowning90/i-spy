const addMarker = (tile) => {
    const targetMarker = document.createElement("div");
    targetMarker.setAttribute("id", "targetMarker");
    tile.appendChild(targetMarker);
}

const removeMarker = () => {
    const targetMarker = document.querySelector('#targetMarker');
    targetMarker.remove();
}

export { addMarker, removeMarker };

