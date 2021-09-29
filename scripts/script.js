function computerPlay() {
    let playOptions = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * 3);
    return playOptions[selection];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie! You both chose " + playerSelection;
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            playerWins++;
            return "You win! Rock beats scissors!";
        } else {
            computerWins++;
            return "Aww..you lose! Paper beats rock.";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            playerWins++;
            return "You win! Scissors beats paper!";
        } else {
            computerWins++;
            return "Aww..you lose! Rock beats scissors.";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerWins++;
            return "You win! Paper beats rock!";
            
        } else {
            computerWins++;
            return "Aww..you lose! Scissors beats paper.";
        }
    } else {
        return "Invalid choice";
    }
}

function game() {
    playerWins = 0;
    computerWins = 0;
    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter play:");
        alert(playRound(playerSelection, computerSelection));
        console.log("Player: "+playerWins);
        console.log("Computer: "+computerWins);
    } 
    let score = "You:" + playerWins +" Computer: "+ computerWins;
    if (playerWins>computerWins){
        alert("You've won the game! The score is - "+score);
    } else if (playerWins<computerWins){
        alert("Sorry, you lost! The score is - "+score);
    } else {
        alert("It's a tie. The score is - "+score);
    }
}

let playerWins;
let computerWins;

