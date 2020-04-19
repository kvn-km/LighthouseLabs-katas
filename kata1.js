//sorting array descending first, then returning a variable of the sums
let sumLargestNumbers = function(data) {
  data.sort(function(a, b) {
    return b - a;
  });
  let sortedData = data[0] + data[1];
  return sortedData;
};

//or, sorting array ascending, then return the sums directly
let sumLargestNumbers2 = function(data) {
  data.sort(function(a, b) {
    return a - b;
  });
  return data[data.length - 1] + data[data.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

console.log(sumLargestNumbers2([1, 10]));
console.log(sumLargestNumbers2([1, 2, 3]));
console.log(sumLargestNumbers2([10, 4, 34, 6, 92, 2]));
