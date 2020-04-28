const playMatch = require('./app.js');
// const computerPlay = require('./app.js')

test('T1 rock x rock = draw', () => {
    expect(playMatch('rock', 'rock')).toBe('draw')
})

test('T2 paper x paper = draw', () => {
    expect(playMatch('paper', 'paper')).toBe('draw')
})

test('T3 scissors x scissor = draw', () => {
    expect(playMatch('scissors', 'scissors')).toBe('draw')
})



test('T4 rock x scissor = win', () => {
    expect(playMatch('rock', 'scissors')).toBe('win')
})

test('T5 rock x paper = lost', () => {
    expect(playMatch('rock', 'paper')).toBe('lost')
})



test('T6 paper x rock = win', () => {
    expect(playMatch('paper', 'rock')).toBe('win')
})

test('T7 paper x scissors = lost', () => {
    expect(playMatch('paper', 'scissors')).toBe('lost')
})



test('T8 scissors x paper = win', () => {
    expect(playMatch('scissors', 'paper')).toBe('win')
})

test('T9 scissors x rock = lost', () => {
    expect(playMatch('scissors', 'rock')).toBe('lost')
})



// test('T10 scissors x rock = lost', () => {
//     expect(playMatch('rock', 'wherever')).toBe('hack fail')
// })