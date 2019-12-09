var rounds = 3

function computerPlay() {
    let choice = ['rock','paper','scissors']
    let x = Math.floor((Math.random() * 3) + 0);
    return choice[x];
}

function check(playerSelection, computerSelection) {
    let win = 0, match = 0, lost = 0, draw = 0
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
    playerSelection = this.id; // get id of button click with addEventListener
    computerSelection = computerPlay();
    
    // test
    //window.alert(`we in! ${playerSelection} and ${computerSelection}`)
    //window.alert(check(playerSelection, computerSelection))
    
    // escreve valor var win nos paragrafos do #co2
    selector1 = document.querySelector('#win')
    selector1.innerHTML += 'Extra stuff';
}

// modify variables when click
const buttons = document.querySelectorAll('button');
for (let count = 0; count < buttons.length; count+=1) {
    buttons[count].addEventListener('click', playRound);
}


// ---------- reset button ---------------
// function onclick1() {
//     return 'reset stuff'
// };

// try run only for .btn-x - to use buttons reset aside
// const buttons = document.querySelectorAll('.btn-x');