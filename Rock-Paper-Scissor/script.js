let userScore=0;
let computerScore=0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.getElementById('result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice(){
    const choices = ["rock" ,"paper","scissor"];
    const  randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];


}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);

}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.textContent =userScore;
    result_p.textContent = `${capitalize(userChoice)} beats ${capitalize(computerChoice)}. You win! 🎉`;

}

function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `${capitalize(computerChoice)} beats ${capitalize(userChoice)}. You lose. 😢`;
}

function draw(userChoice,computerChoice){
    result_p.textContent = `It's a draw! You both chose ${capitalize(userChoice)}.`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
}

main();
