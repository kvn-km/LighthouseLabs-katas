const squareCode = function (message) {
  // declare our vars
  let theOutput = ""; // our output
  const newMSG = message.replace(/ /gi, ""); // remove spaces
  const lineLength = Math.ceil(Math.sqrt(newMSG.length)); // number of chars per line
  const rowNumbers = Math.ceil(newMSG.length / lineLength); // number of "rows"

  // work through each row
  for (let r = 0; r <= rowNumbers; r++) {
    // iterate through our message
    for (let i = r; i < newMSG.length; i++) {
      // every lineLength number of letters in, add the letter to our output
      if (i % lineLength === 0 + r) {
        theOutput += newMSG[i];
      }
    }
    // add a space at the end of each row
    theOutput += " ";
  }
  // return output to the user
  return theOutput;
};

// the below is supplied

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*  Expected Output:
    clu hlt io  
    fto ehg ee dd
    hae and via ecy
    imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
 */
