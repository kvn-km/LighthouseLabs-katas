/*
My pseudocode:
1 repeat first number, second number of times, add to string-variable
2 if this is the last sub-array, goto 4,
3 if there is still more, add a comma and space, goto 1
4 return variable
*/

let repeatNumbers = function(data) {
  // string to output
  let stringOfNumbers = "";
  // outer array loop
  for (let i = 0; i < data.length; i++) {
    // inner array loop
    for (let j = 0; j < data[i][1]; j++) {
      // add first number, loop
      stringOfNumbers += data[i][0];
    }
    // if this is the last sub-array, return, otherwise, add a comma and repeat
    if (i === data.length - 1) {
      return stringOfNumbers;
    } else {
      stringOfNumbers += ", ";
    }
  }
  return String(stringOfNumbers);
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3]
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
  ])
);
