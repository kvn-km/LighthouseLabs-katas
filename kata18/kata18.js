// Number Guesser

// Start by declaring our vars and dependencies
let prompt = require("prompt-sync")();
let randomNum = Math.floor(Math.random() * Math.floor(101)); // generate a random number
let guesses = { guess: [], numTries: 0 }; // keep track of geussed numbers and tries
let answer = ""; // the user's guess
// check whether the answer has been guessed before
let previouslyGuessed = function (guessArr, number) {
  return guessArr.some(function (guessNum) {
    return number === guessNum;
  });
};

do {
  console.log(randomNum); // uncomment for testing purposes only
  answer = prompt("Please guess a number: "); // prompt user for answer

  if (previouslyGuessed(guesses.guess, answer)) {
    // guessed answer already
    console.log(`You've already guessed ${answer}.`);
    // add the guess to the list of guesses
    guesses["guess"].push(answer);
  } else if (answer < randomNum && answer != "") {
    // guess is too small
    guesses["numTries"] += 1;
    console.log(`${answer} is too small.`);
    guesses["guess"].push(answer);
  } else if (answer > randomNum && answer != "") {
    // guess is too large
    guesses["numTries"] += 1;
    console.log(`${answer} is too large.`);
    guesses["guess"].push(answer);
  } else if (!Number.isInteger(answer) && answer != randomNum && answer != "") {
    // if NaN
    console.log(`${answer} is not a number.`);
    guesses["guess"].push(answer);
  } else if (answer === "") {
    // no input
    continue;
  } else if (answer == randomNum) {
    // if correct answer
    guesses["numTries"] += 1;

    if (guesses.numTries === 1) {
      console.log(`You guessed the number ${randomNum} correctly!\nIt took 1 try! Wow, lucky! o_O`);
    } else {
      console.log(`You guessed the number ${randomNum} correctly!\nIt took ${guesses.numTries} tries!`);
    }
  }
} while (answer != randomNum); // continue as long as the guess is incorrect
