const generateBoard = function (white, black) {
  let theBoard = [];

  for (let r = 0; r < 8; r++) {
    let boardRows = [];
    for (let c = 0; c < 8; c++) {
      if ((r === white[0] && c === white[1]) || (r === black[0] && c === black[1])) {
        boardRows.push(1);
      } else {
        boardRows.push(0);
      }
    }
    theBoard.push(boardRows);
  }
  return theBoard;
};

const queenThreat = function (theBoard) {
  let theThreat = false;
  let queenPos = { white: [], whiteVal: false, black: [], blackVal: false };

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (theBoard[r][c] === 1 && queenPos.whiteVal === false) {
        queenPos.white = [r, c];
        queenPos.whiteVal = true;
      } else if (theBoard[r][c] === 1 && queenPos.whiteVal === true) {
        queenPos.black = [r, c];
        queenPos.blackVal = true;
      }
    }
  }

  if (
    queenPos.white[0] === queenPos.black[0] ||
    queenPos.white[1] === queenPos.black[1] ||
    queenPos.white[0] === queenPos.black[1] ||
    queenPos.white[1] === queenPos.black[0]
  ) {
    theThreat = true;
  }

  return theThreat;
};

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
