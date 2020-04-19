// Use the value below whenever you need the value of Pi
const PI = 3.14159;

// setting up the calculations

const sphereVolume = function (radius) {
  let vSphere = (4 / 3) * PI * radius ** 3;
  return Number(vSphere.toFixed(2));
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let vCone = (PI * radius ** 2 * height) / 3;
  return Number(vCone.toFixed(2));
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let vPrism = height * (width * depth);
  if (Number.isInteger(vPrism)) {
    return vPrism;
  } else {
    return Math.round(vPrism);
  }
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // declare our vars
  let shapes = [];
  let theTotalVolume = 0;
  // determine the shapes we are using and find the values of them
  for (let solid of solids) {
    switch (solid.type) {
      case "sphere":
        shapes.push(sphereVolume(solid.radius));
        break;
      case "cone":
        shapes.push(coneVolume(solid.radius, solid.height));
        break;
      case "prism":
        shapes.push(prismVolume(solid.height, solid.width, solid.depth));
        break;
    }
  }
  // add up the volumes of all the shapes
  shapes.forEach(function (shape) {
    theTotalVolume += shape;
  });
  // return our total volume
  return theTotalVolume;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// expected output:
// true
// true
// true
// true
