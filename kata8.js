/*
  my notes:
  1. loop and create maxValue number of lines
  2. each line should have maxValue number of numbers,
     start with the line number's number, and have a line-break
  3. each number should be a multiple of the first number of each line
*/

const multiplicationTable = function(maxValue) {
  let outputTable = ""; // the output
  // 1. number of lines
  for (let i = 1; i <= maxValue; i++) {
    // 2. number of numbers per line
    for (let j = 1; j <= maxValue; j++) {
      // 3. multiple of each number
      for (let k = j; k <= maxValue * j; k += j) {
        outputTable += k + " ";
        // looks like spaces are required between numbers
      }
      // add line break for end of line, and continue
      outputTable += "\n";
    }
    // return full table
    return outputTable;
  }
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

/* 
  output:

  1

  1 2 3 4 5
  2 4 6 8 10
  3 6 9 12 15
  4 8 12 16 20
  5 10 15 20 25 

  1 2 3 4 5 6 7 8 9 10
  2 4 6 8 10 12 14 16 18 20
  3 6 9 12 15 18 21 24 27 30
  4 8 12 16 20 24 28 32 36 40
  5 10 15 20 25 30 35 40 45 50
  6 12 18 24 30 36 42 48 54 60
  7 14 21 28 35 42 49 56 63 70
  8 16 24 32 40 48 56 64 72 80
  9 18 27 36 45 54 63 72 81 90
  10 20 30 40 50 60 70 80 90 100

*/
