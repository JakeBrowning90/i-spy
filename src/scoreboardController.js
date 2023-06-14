let scoreboard = [
    {name: "AAA", score: 10},
    {name: "BBB", score: 20},
    {name: "CCC", score: 30},
    {name: "DDD", score: 40},
    {name: "EEE", score: 50},
    {name: "FFF", score: 60},
    {name: "GGG", score: 70},
    {name: "HHH", score: 80},
    {name: "III", score: 90},
    {name: "JJJ", score: 100},
  ]

const orderScores = (scoreboard) => {
  scoreboard.sort((a, b) => a.score - b.score)
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