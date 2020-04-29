// i might have done this a little round-about way, but wanted to try using object in theKVGate

const urlDecode = function (text) {
  // declare our required vars
  let newText = text.replace(/%20/g, " "); // add spaces where they should be
  let theKVGate = { theKey: "", theValue: "", gateOpen: true }; // figure out if working on the Key or Value of the object
  let theOutput = {}; // our object

  // iterate over our string and
  for (char of newText) {
    // if we run into any special characters like:
    switch (char) {
      case "=": // the Key is complete, add it to our object
        if (theKVGate.gateOpen) {
          // only if we're working on the key
          theOutput[theKVGate.theKey];
          theKVGate.gateOpen = false;
        } else {
          theKVGate.theValue += char;
        }
        break;
      case "&": // the Value is complete, add it to our object's key, and a new Key will start
        if (theKVGate.gateOpen) {
          theKVGate.theKey += char;
        } else {
          theOutput[theKVGate.theKey] = theKVGate.theValue;
          theKVGate.theValue = ""; // making sure to clear
          theKVGate.theKey = ""; // our Key and Value vars
          theKVGate.gateOpen = true; // and resetting our Key Gate
        }
        break;
      default:
        // if it's not a special character, just add it to
        if (theKVGate.gateOpen) {
          theKVGate.theKey += char; // the Key
        } else {
          theKVGate.theValue += char; // or Value
        }
        break;
    }
  }
  // if we finished iterating through the string and haven't run into any additional special characters, then add the Key and Value to our object
  theOutput[theKVGate.theKey] = theKVGate.theValue;
  // and return it to the user
  return theOutput;
};

// The below is supplied:

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*  Expected output:

{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"

*/
