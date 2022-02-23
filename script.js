const GAME_DURATION = 5; 

const getUserChoice = () => {
    return prompt("What is your selection?").toUpperCase(); // Take input from the user
};  

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

function playWholeGame() {

    // Declare a counter variable to keep track of what the result of each player is
    let playerCount = 0;
    let computerCount = 0;

    // Loop through the number of rounds of a whole game specified as a global variable in the beginning of the program and increment the winner of each round or both if it was a draw with 1.

    for(i = 0; i < GAME_DURATION; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getUserChoice();

        let currentRound = playRound(playerSelection, computerSelection, i + 1); // Plays the current round and saves the result string in a variable

        if (currentRound.indexOf('win') != -1) {
            playerCount++;
        }
        else if (currentRound.indexOf('lose') != -1) {
            computerCount ++;
        }
        else {
            playerCount++;
            computerCount++;
        }

        console.log(currentRound);
    }

    // Print the returned result of decideWinner()
    console.log(decideWinner(playerCount, computerCount));
}

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

// Run the program

playWholeGame();