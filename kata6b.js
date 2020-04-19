const whereCanIPark = function(spots, vehicle) {
  // let's declare the parking spots location var
  let theParkingSpot = [];
  // create our vehicle objects
  switch (vehicle) {
    case "regular":
      vehicle = {
        type: "R",
        size: 3
      };
      break;
    case "small":
      vehicle = {
        type: "S",
        size: 2
      };
      break;
    case "motorcycle":
      vehicle = {
        type: "M",
        size: 1
      };
      break;
  }
  // interate through the Y rows first
  for (let y of spots) {
    //iterate through each element in Y row, giving for X
    for (let x of y) {
      // setup the size of the spot at this X,Y location, if it's empty
      let theSpotSize = 0;
      switch (x) {
        case "R":
          theSpotSize = 3;
          break;
        case "S":
          theSpotSize = 2;
          break;
        case "M":
          theSpotSize = 1;
          break;
      }
      // if it matches our requirements add the coordinates and return the value
      if (x === vehicle.type || theSpotSize >= vehicle.size) {
        let spotIndexX = y.indexOf(x);
        let spotIndexY = spots.indexOf(y);
        theParkingSpot.push(spotIndexX, spotIndexY);
        return theParkingSpot;
      }
    }
  }
  // if we've made it out of the loops and we still haven't found a spot, return False as required
  if (theParkingSpot.length == 0 || theParkingSpot == undefined) {
    return (theParkingSpot = false);
  }
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"] // 5
    ],
    "regular"
  )
);

// [ 4, 0 ]

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"]
    ],
    "small"
  )
);

// false

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"]
    ],
    "motorcycle"
  )
);

// [ 3, 1 ]
