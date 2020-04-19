const organizeInstructors = function (instructors) {
  // declare our output object
  let theOutput = {};
  // look through the given objects/instructors
  for (let instructor of instructors) {
    // if the course name is not a key in our output var, create it as an array and add the first property
    if (!(instructor.course in theOutput)) {
      theOutput[instructor.course] = [];
      theOutput[instructor.course].push(instructor.name);
    } else {
      // if it already is, then push the new property into the array
      theOutput[instructor.course].push(instructor.name);
    }
  }
  // show us what we've got
  return theOutput;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);

/*  expected output

format = { course name: [instructors] }

{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/
