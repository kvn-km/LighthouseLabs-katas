const checkAir = function(samples, threshold) {
  // setup our variables
  let theOutput = "";
  let numDirtySamples = 0;

  // iterate through samples to count Dirty samples
  for (sample of samples) {
    if (sample == "dirty") {
      numDirtySamples++;
    }
  }
  // setup the calculations
  let dirtyPercent = numDirtySamples / samples.length;

  if (dirtyPercent.toFixed(2) >= threshold) {
    theOutput = "Polluted";
  } else {
    theOutput = "Clean";
  }
  // return the Output
  return theOutput;
};

console.log(checkAir(["clean", "clean", "dirty", "clean", "dirty", "clean", "clean", "dirty", "clean", "dirty"], 0.3));

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9));

// Expected output:
// Polluted
// Polluted
// Clean
