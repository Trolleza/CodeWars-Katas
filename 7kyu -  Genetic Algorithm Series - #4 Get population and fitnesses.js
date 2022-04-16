// 7kyu -  Genetic Algorithm Series - #4 Get population and fitnesses

// In a genetic algorithm, a population is a collection of candidates that may evolve toward a better solution.

// We determine how close a chromosome is to a ideal solution by calculating its fitness. https://www.codewars.com/kata/567b468357ed7411be00004a/train You are given two parameters, the population containing all individuals and a function fitness that determines how close to the solution a chromosome is.

// Your task is to return a collection containing an object with the chromosome and the calculated fitness.

// [
//   { chromosome: c, fitness: f },
//   { chromosome: c, fitness: f },
//   ...
// ]

// Test.assertEquals(result[0].fitness, 0.25);
// Test.assertEquals(result[1].fitness, 0.75);
// Test.assertEquals(result.slice(-2, -1)[0].fitness, 0.375);
// Test.assertEquals(result.slice(-1)[0].fitness, 0.875);

const mapPopulationFit = (population, fitness) => {
  return population.map((chromosome) => ({
    chromosome,
    fitness: fitness(chromosome),
  }));
};

//OU

const mapPopulationFit = (population, fitness) =>
  population.map((v) => ({ chromosome: v, fitness: fitness(v) }));

//OU

const mapPopulationFit = (population, fitness) => {
  let result = [];
  for (chromosome of population) {
    result.push({ chromosome: chromosome, fitness: fitness(chromosome) });
  }
  return result;
};

//OU

const mapPopulationFit = (pop, fit) => {
  let res = [];
  for (let i = 0; i < pop.length; i++) {
    res.push({
      chromosome: pop[i],
      fitness: fit(pop[i]),
    });
  }
  return res;
};
