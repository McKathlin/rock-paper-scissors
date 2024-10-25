
const TOOL_CHOICES = ["rock", "paper", "scissors"];
const ROUNDS_PER_MATCH = 5;

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const response = prompt("Rock, paper, or scissors?");
    let choice;
    switch(response.toLowerCase()) {
        case "rock":
        case "r":
            choice = "rock";
            break;
        case "paper":
        case "p":
            choice = "paper";
            break;
        case "scissors":
        case "s":
            choice = "scissors";
            break;
        default:
            console.log("We don't understand your selection, so we'll choose for you.");
            choice = getComputerChoice();
    }
    return choice;
}

function getComputerChoice() {
    const choiceIndex = Math.floor(Math.random() * TOOL_CHOICES.length);
    return TOOL_CHOICES[choiceIndex];
}

function getWinningChoice(choiceA, choiceB) {
    if (choiceA == "rock") {
        return choiceB == "paper" ? "paper" : "rock";
    } else if (choiceA == "paper") {
        return choiceB == "scissors" ? "scissors" : "paper";
    } else {
        // Choice A is scissors.
        return choiceB == "rock" ? "rock" : "scissors";
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    console.log(`You: ${humanChoice}`);

    let computerChoice = getComputerChoice();
    console.log(`CPU: ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("It's a tie.");
    } else {
        let winningChoice = getWinningChoice(humanChoice, computerChoice);
        if (winningChoice == humanChoice) {
            console.log("You win!");
            humanScore++;
        } else {
            console.log("CPU wins.");
            computerScore++;
        }
    }

    console.log(`You: ${humanScore}\tCPU: ${computerScore}`);
}

for (let roundNumber = 1; roundNumber <= ROUNDS_PER_MATCH; roundNumber++) {
    console.log(`Round ${roundNumber}`);
    playRound();
}

if (humanScore > computerScore) {
    console.log("You win the match!");
} else if (humanScore < computerScore) {
    console.log("Sorry, you lose the match.");
} else {
    console.log("This match is a tie.");
}