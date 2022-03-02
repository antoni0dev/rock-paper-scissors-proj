const GAME_DURATION = 5; 
const scoreboard = document.querySelector('#scoreboard');
const buttons = document.querySelectorAll('button');
let roundCount = 0;
let playerCount = 0;
let computerCount = 0;

const getComputerChoice = () => {
    const myArray = ["ROCK", "PAPER", "SCISSORS"];

    return myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(playerSelection, computerSelection, roundNumber) {
    // Play a single round by checking the inputs from both - the user and the computer

    if (playerSelection == computerSelection) 
    {
        return `Round ${roundNumber} is a draw. You both have ${playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase()}`; // Makes the first letter capital and the rest of the text lower case.
    }
    else {
        switch (playerSelection) {
            case "ROCK":
                if (computerSelection == "PAPER")
                {
                    return `You lose round ${roundNumber}! Paper beats Rock`;
                }
                else {
                    return `You win round ${roundNumber}! Rock beats Scissors`;
                }
            case "PAPER":
                if (computerSelection == "ROCK") {
                    return `You win round ${roundNumber}! Paper beats Rock`;
                } 
                else {
                    return `You lose round ${roundNumber}! Scissors beat Paper`;
                }
            case "SCISSORS":
                if (computerSelection == "ROCK") {
                    return `You lose round ${roundNumber}! Rock beats Scissors`;
                }
                else {
                    return `You win round ${roundNumber}! Scissors beat Paper`;
                }
        }
    }
};


function decideWinner(playerCount, computerCount) {
    if (playerCount > computerCount) {
        return 'Congratulations! You win!';
    }
    else if (playerCount < computerCount) {
        return 'Damn! The computer has beaten you! Try again!';
    }
    else {
        return 'Oh no! This game is a draw!';
    }
}

buttons.forEach(b => b.addEventListener('click', () => {

    let computerSelection = getComputerChoice();    

    let currentRound = playRound(b.value, computerSelection, roundCount + 1);
    const para = document.createElement('p');
    para.textContent = currentRound;
    scoreboard.appendChild(para);

    if (currentRound.indexOf('win') != -1) {
        playerCount++;
    }
    else if (currentRound.indexOf('lose') != -1) {
        computerCount ++;
    }

    roundCount++; 

    if (playerCount === GAME_DURATION || computerCount === GAME_DURATION) {
        const para = document.createElement('p');
        para.textContent = decideWinner(playerCount, computerCount);
        scoreboard.appendChild(para);
        setTimeout(function(){
            window.location.reload(1);
            }, 3000);
    }       
}));