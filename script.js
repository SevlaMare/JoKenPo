var rounds = 3

function computerPlay() {
    let choice = ['rock','paper','scissors']
    let x = Math.floor((Math.random() * 3) + 0);
    return choice[x];
}

function check(playerSelection, computerSelection) {
    win = 0, match = 0, lost = 0, draw = 0
    if (playerSelection == computerSelection) {
        match += 1
        draw += 1
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        match += 1
        lost += 1
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        match += 1
        win += 1
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        match += 1
        win += 1
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        match += 1
        lost += 1
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        match += 1
        win += 1
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        match += 1
        lost += 1
    }
    return win
}

function playRound() { 
    // get id of button click with addEventListener
    playerSelection = this.id; 
    computerSelection = computerPlay();
    
    // test choices
    //window.alert(`we in! ${playerSelection} and ${computerSelection}`)
    
    // test fx check
    //window.alert(check(playerSelection, computerSelection))
    
    const selector1 = document.querySelector('#win');
    selector1.textContent = `Wins: ${win}`;
}

// OK - call fx when click button to modify var
const buttons = document.querySelectorAll('button');
for (let count = 0; count < buttons.length; count+=1) {
    buttons[count].addEventListener('click', playRound);
}