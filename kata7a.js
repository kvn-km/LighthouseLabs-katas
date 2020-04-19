/*
  My pseudocode:
  use .toUpperCase
  iterate through the string
  if it's a space, skip it,
  if it's a letter after space, capitalize it
*/

let camelCase = function(input) {
  let theOutput = "";
  for (let i = 0; i < input.length; i++) {
    // iterate through the string array
    if (input[i] === " ") {
      // skip it's a space
      continue;
    } else if (input[i - 1] === " ") {
      // capitalize if it's after a space
      theOutput += input[i].toUpperCase();
    } else {
      // simply add it if it's anything else
      theOutput += input[i];
    }
  }
  return theOutput;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
  output:
  thisIsAString
  loopyLighthouse
  supercalifragalisticexpialidocious
*/
