const makeCase = function (input, style) {
  // create a function that changes strings to cases/styles
  let theStyleSwitch = function (input, theStyles) {
    // declare the output string var, and other utility vars
    let theOutput = "";
    let vowels = ["a", "e", "i", "o", "u"];
    // the switch per case style
    switch (theStyles) {
      case "camel":
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            continue;
          } else if (input[i - 1] === " ") {
            theOutput += input[i].toUpperCase();
          } else {
            theOutput += input[i];
          }
        }
        break;
      case "pascal":
        for (let i = 0; i < input.length; i++) {
          if (i === 0) {
            theOutput += input[i].toUpperCase();
          } else if (input[i] === " ") {
            continue;
          } else if (input[i - 1] === " ") {
            theOutput += input[i].toUpperCase();
          } else {
            theOutput += input[i];
          }
        }
        break;
      case "snake":
        for (char of input) {
          if (char === " ") {
            theOutput += "_";
          } else {
            theOutput += char;
          }
        }
        break;
      case "kebab":
        for (char of input) {
          if (char === " ") {
            theOutput += "-";
          } else {
            theOutput += char;
          }
        }
        break;
      case "title":
        for (let i = 0; i < input.length; i++) {
          if (i === 0) {
            theOutput += input[i].toUpperCase();
          } else if (input[i - 1] === " ") {
            theOutput += input[i].toUpperCase();
          } else {
            theOutput += input[i];
          }
        }
        break;
      case "vowel":
        for (char of input) {
          for (vowel of vowels) {
            if (char === vowel) {
              char = char.toUpperCase();
            }
          }
          theOutput += char;
        }
        break;
      case "consonant":
        for (char of input) {
          char = char.toUpperCase();
          for (vowel of vowels) {
            vowel = vowel.toUpperCase();
            if (char === vowel) {
              char = char.toLowerCase();
              break;
            }
          }
          theOutput += char;
        }
        break;
      case "upper":
        theOutput += input.toUpperCase();
        break;
      case "lower":
        theOutput += input.toLowerCase();
        break;
    }
    return theOutput;
  };

  // if array, then apply each style to the string in turn
  // else just apply the style
  if (Array.isArray(style)) {
    return theStyleSwitch(theStyleSwitch(input, style[0]), style[1]);
  } else {
    return theStyleSwitch(input, style);
  }
};

// below are supplied:

/* Precedence

1 camel, pascal, snake, kebab, title
2 vowel, consonant
3 upper, lower

-----

expected output

thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING

*/

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
