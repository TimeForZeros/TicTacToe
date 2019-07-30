// 1) Define required constants
const PLAYER = {
    default: 'rgb(116, 218, 231)',
    x: 'darkcyan',
    y: 'red'
};
//const xImage = document.createElement('img');
//xImage.src = 'Images/42-423083_multiplication-sign-svg-png-icon-free-download-tic.png';
// 2) Define required variables used to track the state of the game
var turn;
// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should: prompt 
function init() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    turn *= -1;
    winner = null;
  //  render();
}
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square ---event listener
document.querySelector('section.board').addEventListener('click', handleClick);
function handleClick(evt) {
    
    let click = document.getElementById(evt.target.id);
 //   for (var i = 0; i < 9; i++) {
  //  board.forEach(function(posArr, posIdx) {
        //hide/show the column's marker depending if there are 0's or not
        //let marker = document.getElementById(`p${posIdx}`);
       // posArr.forEach(function(cell, rowIdx) {
        
        if (click.style.backgroundColor = PLAYER.x || click.style.backgroundColor = PLAYER.default) {
        click.style.backgroundColor = PLAYER.y;
        }
        else {click.style.backgroundColor = PLAYER.x}
      //     winner = getWinner();

    }
      //  });
    
    

    console.log(render);
// 5) Handle a player clicking a square
function render() {
board.forEach(function(colArr, colIdx) {
   /* let marker = document.getElementById(`col${colIdx}`);
    marker.style.visibility = colArr.indexOf(0) === -1 ? 'hidden' : 'visible';
         if (colArr.indexOf(0) === -1) {
            marker.style.visibility = 'hidden';
        }
        else {
            marker.style.visibility = 'visible';
        }*/
        colArr.forEach(function(cell, rowIdx) {
            let div = document.getElementById(`c${colIdx}r${rowIdx}`);
            // div.createTextNode = PLAYER[cell];
            // div.style.backgroundColor = 
        });
});
};

// 6) Handle a player clicking the replay button: calls init() function
document.getElementById('resetButton').addEventListener('click', init);

init();

