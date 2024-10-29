//=============================================================================
// Globals
//=============================================================================

const TOOL_CHOICES = ["rock", "paper", "scissors"];
const POINTS_TO_WIN = 5;

let humanScore = 0;
let computerScore = 0;

//=============================================================================
// Input
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
// Output
//=============================================================================

const humanScoreNode = document.querySelector("#human-score");
const computerScoreNode = document.querySelector("#cpu-score");
function updateScore() {
    humanScoreNode.innerText = humanScore;
    computerScoreNode.innerText = computerScore;
}

const moveLogNode = document.querySelector("#move-log");
function logText(text) {
    const para = document.createElement("p");
    para.innerText = text;
    moveLogNode.appendChild(para);
}

const moveSectionNode = document.querySelector("#move-choice");
const winSectionNode = document.querySelector("#win-announce");
const winnerNameNode = document.querySelector("#winner-name");
function announceWinner() {
    let winText;
    if (computerScore > humanScore) {
        winText = "CPU wins the match!";
    } else {
        winText = "You win the match!"
    }
    winnerNameNode.innerText = winText;
    logText(winText);
}

//=============================================================================
// Game logic
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
    // Record the picks.
    let computerChoice = getComputerChoice();
    let pickText = `You pick ${humanChoice}; CPU picks ${computerChoice}.`;

    // Calculate the outcome.
    let outcomeText;
    if (humanChoice == computerChoice) {
        outcomeText = "This round is a tie.";
    } else {
        let winningChoice = getWinningChoice(humanChoice, computerChoice);
        if (winningChoice == humanChoice) {
            outcomeText = "You win this round.";
            humanScore++;
        } else {
            outcomeText = "CPU wins this round.";
            computerScore++;
        }
    }

    // Display the outcome.
    logText(`${pickText} ${outcomeText}`);
    updateScore();
    if (Math.max(humanScore, computerScore) >= POINTS_TO_WIN) {
        announceWinner();
    }
}