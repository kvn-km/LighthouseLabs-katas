const blocksAway = function (directions) {
  // declare our route vars
  let destinationCoords = [0, 0]; // coordinates we ends up at
  let facing = ""; // direction we're facing after each step

  // go through the directions
  for (let i = 0; i <= directions.length; i++) {
    // starting with the first step
    if (i === 0) {
      switch (directions[i]) {
        case "right":
          destinationCoords[0] += directions[i + 1];
          facing = "east";
          break;
        case "left":
          destinationCoords[1] += directions[i + 1];
          facing = "north";
          break;
      }
    } else {
      // and then figure out which way we're facing after each step and turn
      // right turns
      switch (true) {
        case facing === "north" && directions[i] === "right":
          destinationCoords[0] += directions[i + 1];
          facing = "east";
          break;
        case facing === "south" && directions[i] === "right":
          destinationCoords[0] -= directions[i + 1];
          facing = "west";
          break;
        case facing === "west" && directions[i] === "right":
          destinationCoords[1] += directions[i + 1];
          facing = "north";
          break;
        case facing === "east" && directions[i] === "right":
          destinationCoords[1] -= directions[i + 1];
          facing = "south";
          break;
        // left turns
        case facing === "north" && directions[i] === "left":
          destinationCoords[0] -= directions[i + 1];
          facing = "west";
          break;
        case facing === "south" && directions[i] === "left":
          destinationCoords[0] += directions[i + 1];
          facing = "east";
          break;
        case facing === "west" && directions[i] === "left":
          destinationCoords[1] -= directions[i + 1];
          facing = "south";
          break;
        case facing === "east" && directions[i] === "left":
          destinationCoords[1] += directions[i + 1];
          facing = "north";
          break;
      }
    }
  }
  // output our final coordinates as written requirements: east and north
  let arrivalCoords = { east: destinationCoords[0], north: destinationCoords[1] };
  return arrivalCoords;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/*
  expected output:
  {east: 1, north: 3}
  {east: 3, north: 3}
  {east: 0, north: 0}
*/
