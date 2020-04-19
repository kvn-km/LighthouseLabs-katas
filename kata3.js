let numberOfVowels = function(data) {
  let x = 0; //we will start with zero vowels
  for (let i = 0; i < data.length; i++) {
    switch (
      data[i] //iterate through our string and check for...
    ) {
      case "a":
        x++; //add 1 if match
        break;
      case "e":
        x++;
        break;
      case "i":
        x++;
        break;
      case "o":
        x++;
        break;
      case "u":
        x++;
        break;
    }
  }
  return x;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
