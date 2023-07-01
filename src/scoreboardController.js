let scoreboard = [
    {name: "AAA", score: 80},
    {name: "BBB", score: 90},
    {name: "CCC", score: 100},
    {name: "DDD", score: 110},
    {name: "EEE", score: 120},
    {name: "FFF", score: 130},
    {name: "GGG", score: 140},
    {name: "HHH", score: 150},
    {name: "III", score: 160},
    {name: "JJJ", score: 170},
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