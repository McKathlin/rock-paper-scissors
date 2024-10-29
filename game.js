
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
    let winA;
    if (choiceA == "rock") {
        winA = choiceB != "paper";
    } else if (choiceA == "paper") {
        winA = choiceB != "scissors";
    } else { // Choice A is scissors
        winA = choiceB != "rock";
    }
    return winA ? choiceA : choiceB;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`You: ${humanChoice}\nCPU: ${computerChoice}`);

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
