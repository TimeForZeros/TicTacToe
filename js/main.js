// 1) Define required constants
const PLAYER = {
    '0': 'rgb(116, 218, 231)',
    '1': 'darkcyan',
    '-1': 'red'
};

var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var positions = document.querySelectorAll('div');
var message = document.querySelector('h1');

//const xImage = document.createElement('img');
//xImage.src = 'Images/42-423083_multiplication-sign-svg-png-icon-free-download-tic.png';
// 2) Define required variables used to track the state of the game
var turn = 0;
// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should: prompt 
function init() {
    board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    turn = -1;
    winner = null;
    counter = 0;
}

document.querySelector('section.board').addEventListener('click', handleClick);
function handleClick(evt) {
    
    let idx = parseInt(evt.target.id.replace('p', ''));
    if (winner) return;
    board[idx] = turn;
    turn *= -1;
    counter++;
    winner = getWinner();
    render();
    console.log(counter);
// 5) Handle a player clicking a square
function render() {
  board.forEach(function(p, idx) {
    positions[idx].style.backgroundColor = PLAYER[p];
  });
  if (winner === 'T') {
    message.innerHTML = 'TIE!';
  } else if (winner) {
    message.innerHTML = `Congrats ${PLAYER[winner]}!`;
  } else {
    message.innerHTML = `${PLAYER[turn]}'s Turn`;
  }
}
}

function getWinner() {
  for (var i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
  }
  if (counter > 8) return 'T';
  return;
}
// 6) Handle a player clicking the replay button: calls init() function
document.getElementById('resetButton').addEventListener('click', reset);
//document.getElementById('resetButton').addEventListener('click', reset());
function reset(){
  board.forEach(function(p, idx) {
    positions[idx].style.backgroundColor = PLAYER[0];
    
  })
  console.log('RESET');
  return init();
}
init();