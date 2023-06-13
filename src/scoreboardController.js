let scoreboard = [
    {name: "Alex", score: 50},
    {name: "Betty", score: 20},
    {name: "Carl", score: 80},
    {name: "Devon", score: 10},
    {name: "Edgar", score: 90},
    {name: "Francine", score: 70},
    {name: "Gerald", score: 100},
    {name: "Irene", score: 30},
    {name: "James", score: 60},
    {name: "Kayleigh", score: 40},
  ]

const orderScores = (scoreboard) => {
  scoreboard.sort((a, b) => b.score - a.score)
}

const drawScores = (scoreboard) => {
  const scoreDisplayDiv = document.querySelector("#scoreDisplayDiv")
  for (let i = 0; i < scoreboard.length; i++) {
    let entry = scoreboard[i];
    let displayedScore = document.createElement('div');
    displayedScore.textContent = entry.name + ": " + entry.score;
    scoreDisplayDiv.appendChild(displayedScore);
}
}
  
export { scoreboard, orderScores, drawScores }