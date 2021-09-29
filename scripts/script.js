function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a tie! You both chose " + playerSelection;
    } else if (playerSelection.toLowerCase()==="rock") {
        if (computerSelection="scissors") {
            return "You win! Rock beats scissors!"
        } else {
            return "Aww..you lose! Paper beats rock."
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection="paper") {
            return "You win! Scissors beats paper!"
        } else {
            return "Aww..you lose! Rock beats scissors."
        }
    } else {
        if (computerSelection="rock") {
            return "You win! Paper beats rock!"
        } else {
            return "Aww..you lose! Scissors beats paper."
        }
    }
}