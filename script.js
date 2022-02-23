let playerSelection = prompt("What is your selection?").toUpperCase();

let computerPlay = () => {
    const myArray = ["ROCK", "PAPER", "SCISSORS"];

    return myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection == computerPlay()) {
        return `This round is a draw. You both have ${playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase()}`;
    }
    else {
        switch (playerSelection) {
            case "ROCK":
                if (computerPlay() == "PAPER")
                {
                    return "You lose! Paper beats Rock";
                }
                else {
                    return "You win! Rock beats Scissors";
                }
            case "PAPER":
                if (computerPlay() == "ROCK") {
                    return "You win! Paper beats Rock";
                } 
                else {
                    return "You lose! Scissors beat Paper";
                }
            case "SCISSORS":
                if (computerPlay() == "ROCK") {
                    return "You lose! Rock beats Scissors";
                }
                else {
                    return "You win! Scissors beat Paper";
                }
        }
    }
};

console.log(playRound(playerSelection, computerPlay));