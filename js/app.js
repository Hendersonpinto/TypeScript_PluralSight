"use strict";
class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
function startGame() {
    let playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
}
function logPlayer(name = 'MultiMath Player') {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementId) {
    const inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${score} - ${playerName}`;
}
const logMessage = (message) => console.log(message);
function logError(err) {
    console.error(err);
}
const firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map