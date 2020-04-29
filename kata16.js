// my funtion to generate the board
const generateBoard = function (white, black) {
  // declare our board var
  let theBoard = [];
  // go through each row
  for (let r = 0; r < 8; r++) {
    // initiate each row's array
    let boardRows = [];
    // go through each coordinate/column in the row
    for (let c = 0; c < 8; c++) {
      // if the coordinate matches either white or black queen's position, mark spot as 1, otherwise mark 0
      if ((r === white[0] && c === white[1]) || (r === black[0] && c === black[1])) {
        boardRows.push(1);
      } else {
        boardRows.push(0);
      }
    }
    // push the row to the board and loop to start the next row down
    theBoard.push(boardRows);
  }
  // show us the board
  return theBoard;
};

// my function to see if there's a queen threat
const queenThreat = function (theBoard) {
  // initate the queens
  let theThreat = false;
  let queenPos = { white: [], whiteVal: false, black: [], blackVal: false };
  // go through our board's row
  for (let r = 0; r < 8; r++) {
    // and go through our board's column
    for (let c = 0; c < 8; c++) {
      // there's a queen in the coordinates, push that coordinate to the queen without a value
      if (theBoard[r][c] === 1 && queenPos.whiteVal === false) {
        queenPos.white = [r, c];
        queenPos.whiteVal = true;
      } else if (theBoard[r][c] === 1 && queenPos.whiteVal === true) {
        queenPos.black = [r, c];
        queenPos.blackVal = true;
      }
    }
  }
  // check the positions/coordinates of the queens and if they align then there's a threat
  // this could also be a for-loop
  if (
    queenPos.white[0] === queenPos.black[0] ||
    queenPos.white[1] === queenPos.black[1] ||
    queenPos.white[0] === queenPos.black[1] ||
    queenPos.white[1] === queenPos.black[0]
  ) {
    theThreat = true;
  }
  // if there a threat?
  return theThreat;
};

// the below is supplied

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
  expected output:
  [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
  true

  [
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
  false
*/
