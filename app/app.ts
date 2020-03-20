/// <reference path="player.ts" />


function startGame() {
	//starting a new game

	let playerName: string | undefined = getInputValue('playername')
	logPlayer(playerName);

	postScore(100, playerName)
}

function logPlayer(name:string = 'MultiMath Player'):void{
	console.log(`New game starting for player: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
	const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)

	if (inputElement.value === ''){
		return undefined;
	}
	else{
		return inputElement.value
	}
}

function postScore(score:number, playerName?: string):void{
	const scoreElement: HTMLElement | null = document.getElementById('postedScores');
	scoreElement!.innerText = `${score} - ${playerName}`  //scoreElement! is saying that it should not be null
}

const logMessage = (message: string) => console.log(message);

function logError(err:string): void{
	console.error(err);
}

// let myResult: Result = {
// 	playerName: 'Marie',
//     score: 5,
// 	problemCount: 5,
// 	factor: 7, 
// }

// let player:Person ={
// 	name: 'Daniel',
// 	formatName: () => 'Dan',
// 	// Person also have a age but since is optional it compiles
// }


const firstPlayer:Player = new Player();
firstPlayer.name = 'Lanier'
console.log(firstPlayer.formatName())

document.getElementById('startGame')!.addEventListener('click', startGame);
