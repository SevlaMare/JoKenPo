var draw = 0, win = 0, lost = 0

// scores
var sel_win = document.querySelector("#win")
var sel_lost = document.querySelector("#lost")
var sel_draw = document.querySelector("#draw")


// event listener selectors
var btn_rock = document.querySelector("#rock")
var btn_paper = document.querySelector("#paper")
var btn_scissors = document.querySelector("#scissors")


btn_rock.addEventListener("click", () => {
    play(btn_rock.id)
})
btn_paper.addEventListener("click", () => {
    play(btn_paper.id)
})
btn_scissors.addEventListener("click", () => {
    play(btn_scissors.id)
})


// computer choice
function computerPlay(){
    let op = ['rock', 'paper', 'scissors']
    return op[Math.floor( ( Math.random() * op.length ) )]
}

// computer x player
function playMatch(playSelection, computerSelection){
    if (playSelection == computerSelection) {
        return 'draw'
    } else {
       if (playSelection == 'rock') {
           if ( computerSelection == 'scissors' ) {
               return 'win' 
           } else {
               return 'lost'
           }
       } else if ( playSelection == 'paper' ) {
           if ( computerSelection == 'rock' ) {
               return 'win'
           } else {
               return 'lost'
           }
       } else {
           if ( computerSelection == 'paper' ) {
               return 'win'
           } else {
               return 'lost'
           }
       }
   }
}

// run round
function play(argx){
    const result = playMatch(argx, computerPlay())

    if(result == 'draw'){
        return sel_draw.textContent = `Draw: ${draw+=1}`
    } else if (result == 'win') {
        return sel_win.textContent = `Win: ${win+=1}`
    } else {
        return sel_lost.textContent = `Lost: ${lost+=1}`
    }
}


// TO DO - reset button
//module.exports = playMatch, computerPlay