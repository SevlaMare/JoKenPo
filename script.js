var match = 0, lost = 0, draw = 0, win = 0

var computerSelection = 'rock'
var playerSelection = window.prompt('Var')
window.alert(playerSelection)

// toda vez que clica roda a fx de novo
function check(playerSelection, computerSelection){
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
    
    selWin = document.querySelector('#win')
    return selWin.textContent = `Win: ${win}`
}