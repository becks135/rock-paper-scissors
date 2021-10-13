function computerPlay() {
    let playOptions = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * 3);
    /*let computerImg = document.querySelector(".computer-play");
    switch (selection) {
        case 0: computerImg.src = "images/rock.png";
            break;
        case 1: computerImg.src = "images/paper.png";
            break;
        case 2: computerImg.src = "images/scissors.png";
            break;
    }*/
    return playOptions[selection];
}



function playRound(playerSelection, computerSelection) {
    if (playerWins===winnerScore || computerWins===winnerScore){
        playerWins=0;
        computerWins=0;
    }
    if (playerSelection == computerSelection) {
        return "It's a tie! You both chose " + playerSelection;
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            playerWins++;
            if (playerWins === winnerScore) {
                return "Congrats! You've won the game";
            } else return "You win! Rock beats scissors!";
        } else {
            computerWins++;
            if (computerWins === winnerScore) {
                
                return "Awww:( You've lost the game";
            } else return "Aww..you lose! Paper beats rock.";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            playerWins++;
            if (playerWins === winnerScore) {
               
                return "Congrats! You've won the game";
            } else return "You win! Scissors beats paper!";
        } else {
            computerWins++;
            if (computerWins === winnerScore) {
                
                return "Awww:( You've lost the game";

            } else return "Aww..you lose! Rock beats scissors.";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerWins++;
            if (playerWins === winnerScore) {
              
                 return "Congrats! You've won the game";
                
            } else {
                return "You win! Paper beats rock!";
                
            }

        } else {
            computerWins++;
            if (computerWins === winnerScore) {
               
                return "Awww:( You've lost the game";
            } else return "Aww..you lose! Scissors beats paper.";
        }
    } else {
        return "Invalid choice";
    }
}

function game() {

    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter play:");
        alert(playRound(playerSelection, computerSelection));
        console.log("Player: " + playerWins);
        console.log("Computer: " + computerWins);
    }
    let score = "You:" + playerWins + " Computer: " + computerWins;
    if (playerWins > computerWins) {
        document.querySelector(".game-message").textContent = `You've won the game! The score is - ${score}`;
    } else if (playerWins < computerWins) {
        alert("Sorry, you lost! The score is - " + score);
    } else {
        alert("It's a tie. The score is - " + score);
    }
}
let playerWins = 0;
let computerWins = 0;
const winnerScore = 5;

const playerKeys = document.querySelectorAll(".playerSelection");
playerKeys.forEach(playerKey => playerKey.addEventListener("click", function (e) {
    let computerSelection = computerPlay();
    let computerImg = document.querySelector(".computer-play");
    computerImg.src = `images/${computerSelection}.png`;
    document.querySelector(".game-message").textContent=playRound(e.target.classList[0], computerSelection);
    document.querySelector(".ps").textContent=playerWins;
    document.querySelector(".cs").textContent=computerWins;
    console.log(`${playerWins} - ${computerWins}`);
}));






