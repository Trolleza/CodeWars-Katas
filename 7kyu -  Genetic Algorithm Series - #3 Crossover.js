// 7kyu -  Genetic Algorithm Series - #3 Crossover

// In genetic algorithms, crossover is a genetic operator used to vary the programming of chromosomes from one generation to the next.

// The one-point crossover consists in swapping one's cromosome part with another in a specific given point. The image bellow shows the crossover being applied on chromosomes 1011011001111 and 1011100100110 with the cut point (index) 4:

// In this kata you have to implement a function crossover that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].

// Example:
// crossover('111000', '000110', 3) should return ['111110', 000000']

// Test.expect(crossover('110','001',2)[0] === '111' && crossover('110','001',2)[1] === '000');
// Test.expect(crossover('111000','000110',3)[0] === '111110' && crossover('111000','000110',3)[1] === '000000');

const crossover = (chromosome1, chromosome2, index) => {
  return [
    chromosome1.substring(0, index) + chromosome2.substring(index),
    chromosome2.substring(0, index) + chromosome1.substring(index),
  ];
};

//OU

const crossover = (chromosome1, chromosome2, index) => {
  let start1 = chromosome1.slice(0, index);
  let start2 = chromosome2.slice(0, index);
  start1 += chromosome2.slice(index);
  start2 += chromosome1.slice(index);

  return [start1, start2];
};

//OU

const crossover = (chromosome1, chromosome2, index) => {
  let z = chromosome1;
  chromosome1 = chromosome1
    .substring(0, index)
    .concat(chromosome2.substr(index));
  chromosome2 = chromosome2.substring(0, index).concat(z.substr(index));
  return [chromosome1, chromosome2];
};

//OU

const crossover = (chromosome1, chromosome2, index) => {
  x_1 = chromosome1.split("");
  x_2 = chromosome2.split("");

  let chr_1 = x_1.slice(index, x_1.length).join("");
  let chr_2 = x_2.slice(index, x_2.length).join("");
  x_1 = x_1.slice(0, index).join("") + chr_2;
  x_2 = x_2.slice(0, index).join("") + chr_1;
  let gene = [x_1, x_2];
  return gene;
};
