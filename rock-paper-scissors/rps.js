function getChoice() {
    const playCheck = prompt('Do you want to play Rock paper scissors? yes/no: ').toLowerCase();
    if (playCheck === "no") {
        console.log('Okay then, bye!');
        return;
    } else if (playCheck !== "yes") {
        console.log('Invalid choice, choose again...');
        getChoice();
        return;
    }

    console.log("Ok then, Let's go!");
    let humanScore = 0;
    let computerScore = 0;
    const choices = ["rock", "paper", "scissors"];

    for (let i = 1; i < 6; i++) {
        let humanChoice = prompt("Rock, Paper or Scissors? ").toLowerCase();
        if (!choices.includes(humanChoice)) {
            console.log("Invalid choice, please choose Rock, Paper, or Scissors.");
            i--; // Retry the current round
            continue;
        }

        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex];
        console.log(`Computer chose: ${computerChoice}`);

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }

        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
    }

    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game. Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

getChoice();
