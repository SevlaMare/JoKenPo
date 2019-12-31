var win = 0, lost = 0, draw = 0, match = 0


// generate computer choice
function computerSelection(){
    let op = ['rock', 'paper', 'scissors']
    return op[Math.floor( ( Math.random() * op.length ) )]
}


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

    // end match
    if (match >= 3) {
        console.log('Finish!')
        if (win > lost){
            console.log('You Win!')
        } else if (lost > win){
            console.log('You lost.')
        } else {
            console.log('Draw...')
        }
        // disable buttons
        // show play again button
    }
}


// functions to get play choice and check result
function playRock() {
    let playerSelection = 'rock'
    let computerSelection = computerSelection()
    check(playerSelection, computerSelection)
}


function playPaper() {
    let playerSelection = 'paper'
    let computerSelection = computerSelection()
    check(playerSelection, computerSelection)
}


function playScissors() {
    let playerSelection = 'scissors'
    let computerSelection = computerSelection()
    check(playerSelection, computerSelection)
}