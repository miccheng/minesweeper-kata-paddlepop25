function mineSweeper(cols, rows, mines) {
  if (cols === 0 || rows === 0) return [];

  // Get empty board
  let board = setEmptyBoard(cols, rows)

  // Iterate through & check for mines
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<cols; j++) {
      if (isThereAMine(mines, j, i)) {
        // If mine, replace with *
        board[i][j] = '*'

        // Increment surrounding cells by 1
        const neighbours = [
          [j-1, i-1], [j, i-1], [j+1, i-1],
          [j-1, i],             [j+1, i],
          [j-1, i+1], [j, i+1], [j+1, i+1]
        ]
        neighbours.forEach(([thisCol, thisRow]) => {
          if (board[thisRow] &&
              Number.isInteger(board[thisRow][thisCol])) {
                board[thisRow][thisCol] += 1
          }
        })
      }
    }
  }

  // Convert back to array (with strings)
  return board.map(row => {
    return row.map(cell => (cell === 0) ? "." : cell ).join('')
  })
}

function setEmptyBoard(cols, rows) {
  let board = [];
  for (let i=0; i<rows; i++) {
    let newRow = []
    for (let j=0; j<cols; j++) {
      newRow.push(0);
    }
    board.push(newRow)
  }
  return board;
}

function isThereAMine(mines, col, row) {
  return mines[row] && mines[row].charAt(col) === '*'
}

export default mineSweeper