//=============================================================================
// Globals
//=============================================================================
const moveLog = document.querySelector("#move-log");

const TOOL_CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

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
// Game logic functions
//=============================================================================

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
    logText(`You pick ${humanChoice}; CPU picks ${computerChoice}.`);

    if (humanChoice == computerChoice) {
        logText("This round is a tie.");
    } else {
        let winningChoice = getWinningChoice(humanChoice, computerChoice);
        if (winningChoice == humanChoice) {
            logText("You win this round.");
            humanScore++;
        } else {
            logText("CPU wins this round.");
            computerScore++;
        }
    }

    logText(`You: ${humanScore} CPU: ${computerScore}`);
}

function logText(text) {
    const para = document.createElement("p");
    para.innerText = text;
    moveLog.appendChild(para);
}