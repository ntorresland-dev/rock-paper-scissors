let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



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