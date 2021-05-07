// 5kyu - Pete, the baker

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// Sample Tests:
// describe('description example', function() {
//   var recipe, available;

//   it('pass example tests', function() {
//     recipe = {flour: 500, sugar: 200, eggs: 1};
//     available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//     Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1');

//     recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
//     available = {sugar: 500, flour: 2000, milk: 2000};
//     Test.assertEquals(cakes(recipe, available), 0, 'Wrong result for example #2');
//   });
// });

function cakes(recipe, available) {

  let result = Infinity;
  
  for (let x in recipe) {
  result = Math.min(Math.floor(available[x] / recipe[x]), result);
  
  };
  
  return result || 0;
}

//OU

function cakes(recipe, available) {
  let minimumRecipe = 0;

  for (let ingredients in recipe) {
    if (available[ingredients] === undefined) {
      //caso eu não tenha nenhum ingrediente exigido
      return 0;
    }
    const currentDivision = Math.floor(
      available[ingredients] / recipe[ingredients]
    );

    if (currentDivision < minimumRecipe || minimumRecipe === 0) {
      //com essa condição sempre vai cair nesse if, a não ser que caia no anterior
      minimumRecipe = currentDivision; // e assim, o minimumRecipe sempre terá o menor valor das divisões possíveis no objeto
    }
  }
  return minimumRecipe;
}

//OU

function cakes(recipe, available) {
  let minimumArray = [];

  for (let ingredients in recipe) {
    if (available[ingredients] === undefined) {
      return 0;
    }
    minimumArray.push(Math.floor(available[ingredients] / recipe[ingredients]));
  }
  return Math.min(...minimumArray); //Tem que ser min, porque não tem como fazer 2 receitas e meia, por ex.
}

//OU

function cakes(recipe, available) {
  return Object.keys(recipe).reduce((value, ingredient) => {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      value
    ); // e depois vai diminuindo, até chegar no mínimo divisor de igredientes.
  }, Infinity); //Aqui, diferentemente da de cima, ele começa do INFINITO (como se fosse começar do 0, mas ao contrário) 1º
}

//OU

function cakes(recipe, available) {
  let minimumArray = [];
  for (let ingredients in recipe) {
    minimumArray.push(
      Math.floor(available[ingredients] / recipe[ingredients]) || 0
    );
  }
  return Math.min(...minimumArray);
}

//OU

const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );

//OU

function cakes(recipe, available) {
  let numbers = [];
  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0;
    numbers.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }
  return Math.min.apply(undefined, numbers);
}
