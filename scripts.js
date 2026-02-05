function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
            return;
        }

        if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`Round n°${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    }

    console.log("----------------------------------")
    if (humanScore > computerScore) {
        console.log(`🏆 GAME OVER: You win! Score: ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`💀 GAME OVER: You lose! Score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`🤝 GAME OVER: It's a total tie! Score: ${humanScore} - ${computerScore}`);
    }
}



function getComputerChoice(){
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = "Rock";
    }else if(randomNumber === 2){
        computerChoice = "Paper";
    }else{
        computerChoice = "Scissors";
    }

    return computerChoice;
}



function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?\nType your choice:");
    
    return humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
}

playGame();