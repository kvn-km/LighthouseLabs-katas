const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // declare the var that will hold the recipe
  let theRecipe = "None";

  // check to see if bakeries have the ingredient needed
  const ingredientCheck = function (bakery) {
    let theCheck = false;
    for (let recipe of recipes) {
      for (let ingredient of recipe.ingredients) {
        for (let availableIngredients of bakery) {
          if (availableIngredients === ingredient) {
            // log which recipe has a match
            theRecipe = recipe.name;
            // mark as has-ingredient
            theCheck = true;
          }
        }
      }
    }
    return theCheck;
  };

  // if both bakery checks are true, then we have a match! return which recipe is matched
  if (ingredientCheck(bakeryA) === true && ingredientCheck(bakeryB) === true) {
    return theRecipe;
  }
};

// below is supplied

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

/*  
    expected output:
    Persian Cheesecake
    Nima's Famous Dijon Raisins
*/
