var win = 0, lost = 0, draw = 0, match = 0
var computerSelection = 'rock'

// selectors to scores board #score
const selWin = document.querySelector('#win')
const selLost = document.querySelector('#lost')
const selDraw = document.querySelector('#draw')

// selector to buttons .btn-x
const selRock = document.querySelector('#rock')
const selPaper = document.querySelector('#paper')
const selScissors = document.querySelector('#scissors')

// call fx on button click
selRock.addEventListener('click', playRock)
selPaper.addEventListener('click', playPaper)
selScissors.addEventListener('click', playScissors)

// function to play match and update the scores
function check(playerSelection, computerSelection){
    match += 1
    if (playerSelection == computerSelection) {
        draw += 1
        return selDraw.textContent = `Draw: ${draw}`
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        lost += 1
        return selLost.textContent = `Lost: ${lost}`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        win += 1
        return selWin.textContent = `Win: ${win}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        win += 1
        return selWin.textContent = `Win: ${win}`
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        lost += 1
        return selLost.textContent = `Lost: ${lost}`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        win += 1
        return selWin.textContent = `Win: ${win}`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        lost += 1
        return selLost.textContent = `Lost: ${lost}`
    }
    
}

// functions to set play choice and check result
function playRock() {
    playerSelection = 'rock'
    check(playerSelection, computerSelection)
}

function playPaper() {
    playerSelection = 'paper'
    check(playerSelection, computerSelection)
}

function playScissors() {
    playerSelection = 'scissors'
    check(playerSelection, computerSelection)
}