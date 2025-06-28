let humanScore = 0;
let computerScore = 0;

// DOM elements
const roundResult = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");
const restartButton = document.getElementById("restart");

const buttons = [
  document.getElementById("rock"),
  document.getElementById("paper"),
  document.getElementById("scissors")
];

// Event listeners for buttons
    buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id, getComputerChoice()));
});


// Get computer choice
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Play game
function playRound (humanChoice, computerChoice) {
    const resultDisplay = document.getElementById("round-result");
    const scoreDisplay = document.getElementById("score");
    const winnerDisplay = document.getElementById("winner");

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        resultDisplay.textContent = `It's a draw! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDisplay.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    // Final winner after 5 rounds
    if (humanScore === 5 || computerScore === 5) {
        const finalWinner = humanScore === 5 ? "You won the game!" : "The computer won the game!";
        winnerDisplay.textContent = finalWinner;

        disableButtons();
        
        // Show restart button
        restartButton.style.display = "block";
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Restart button

restartButton.addEventListener("click", () => {
    // Reset scores
    humanScore = 0;
    computerScore = 0;

    // Reset display
    roundResult.textContent = "";
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    winnerDisplay.textContent = "";

    // Re-enable buttons
    buttons.forEach(btn => btn.disabled = false);

    // Hide restart button again
    restartButton.style.display = "none";
});
