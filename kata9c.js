// i want to find the total volume of a shape called DUCK
// the individual shapes that make up DUCK are below
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

// the shape DUCK with its building block shapes
const duck = [largeSphere, smallSphere, cone];

// setting up the calculations
const PI = 3.14159;
const sphereVolume = function (radius) {
  let vSphere = (4 / 3) * PI * radius ** 3;
  // return vSphere.toFixed(2);
  // use the below RETURN instead to correct the error
  return Number(vSphere.toFixed(2));
};
const coneVolume = function (radius, height) {
  let vCone = (PI * radius ** 2 * height) / 3;
  // return vCone.toFixed(2);
  // use the below RETURN instead to correct the error
  return Number(vCone.toFixed(2));
};

// calculate the total volume of all shapes
const totalVolume = function (solids) {
  let shapes = []; // array of volumes per individual shape
  let theTotalVolume = 0; // add volume of shapes into total volume
  // determine the shapes we are using and find the values of them
  for (let solid of solids) {
    switch (solid.type) {
      case "sphere":
        shapes.push(sphereVolume(solid.radius));
        break;
      case "cone":
        shapes.push(coneVolume(solid.radius, solid.height));
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

// output is true if totalVolume is correct
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
