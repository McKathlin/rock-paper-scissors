//=============================================================================
// Event handling
//=============================================================================

document.querySelector("button#rock").addEventListener("click", (e) => {
    playRound("rock");
});

document.querySelector("button#paper").addEventListener("click", (e) => {
    playRound("paper");
});

document.querySelector("button#scissors").addEventListener("click", (e) => {
    playRound("scissors");
});

//=============================================================================
// Game logic
//=============================================================================
const TOOL_CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice) {
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
