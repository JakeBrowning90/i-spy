let gameStartTime;
let gameEndTime;

const markStartTime = () => {
    gameStartTime = new Date();
    return gameStartTime
}
const markEndTime = () => {
    gameEndTime = new Date();
    return gameEndTime
}

const calculateScore = () => {
    let elapsedSeconds = Math.round((gameEndTime - gameStartTime) / 1000)
    return elapsedSeconds;
}

export { gameStartTime, markStartTime, markEndTime, calculateScore }