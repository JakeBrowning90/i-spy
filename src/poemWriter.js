const poemLines = [
    {text: "a clock,"},
    {text: "a birdhouse,"},
    {text: "a duck,"},
    {text: "a five thimbles,"},
    {text: "a plane,"},
    {text: "two fish in a truck;"},
    {text: "A big red apple,"},
    {text: "a zebra jeep,"},
    {text: "STOP,"},
    {text: "GO,"},
    {text: "and BEEP BEEP BEEP."}
]

const writePoem = () => {
    const itemPoem = document.querySelector('#itemPoem');
    for (let i = 0; i < poemLines.length; i++) {
        const line = document.createElement('li');
        line.textContent = poemLines[i].text;
        itemPoem.appendChild(line);
    }
}

export { writePoem }; 