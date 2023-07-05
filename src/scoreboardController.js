let scoreboard = [
    {name: "AAA", score: 100},
    {name: "BBB", score: 120},
    {name: "CCC", score: 140},
    {name: "DDD", score: 160},
    {name: "EEE", score: 180},
    {name: "FFF", score: 200},
    {name: "GGG", score: 220},
    {name: "HHH", score: 240},
    {name: "III", score: 260},
    {name: "JJJ", score: 280},
  ]

const orderScores = (scoreboard) => {
  scoreboard.sort((a, b) => a.score - b.score)
}

const drawScores = (scoreboard) => {
  const scoreDisplayDiv = document.querySelector("#scoreDisplayDiv")
  for (let i = 0; i < scoreboard.length; i++) {
    let entry = scoreboard[i];
    let displayedName = document.createElement('div');
    let displayedScore = document.createElement('div');
    displayedName.textContent = i + 1 + ". "+ entry.name + ":";
    displayedScore.textContent = entry.score;
    scoreDisplayDiv.appendChild(displayedName);
    scoreDisplayDiv.appendChild(displayedScore);
  }
}
  
export { scoreboard, orderScores, drawScores }