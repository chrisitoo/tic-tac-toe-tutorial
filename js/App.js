function App(){
  /*----- constants -----*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ];
/*----- app's state (variables) -----*/
const [board, setBoard] = React.useState(["","","","","","","","",""])
const [turn, setTurn] = React.useState('X');
let win;
let gameOver = false

function handleTurn(event) {
  console.log(event.target, event.target.id)
  let idx = event.target.id
  
    
    let newBoard = [...board]
    newBoard[idx] = turn
    setBoard(newBoard)
    let nextTurn = turn === 'X' ? 'O' : 'X'
    setTurn(nextTurn)
    
    
  
}


function getWinner() {
  let winner = null;
  winningCombos.forEach(function(combo, index) {
      if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'T';
  
}


    return (
        <div>
          <h1>Tic-React-Toe</h1>

          <h2> It's {turn}'s turn!</h2>
        <div class = "flex-container flex-column">
        <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
          {board.map((value, idx) => {
            return (
              <div class="square" key={idx} id={idx}>
                {value}
              </div>
            )
          })}
        </div>
        <button id = "reset-button"> reset </button>
    </div>
        </div>

        
      )

     
}


ReactDOM.render(<App />, root);