const data = require('../data/zoo_data');

function allAnimals() {
  const getAnimals = (animalName) => ({ [animalName.name]: animalName.residents.length });
  const animalsName = data.species.map(getAnimals);

  const result = {};
  animalsName.forEach((element) => Object.assign(result, element));

  return result;
}

function animalsWithoutSex(animal) {
  const getPopularity = (animalName) => animal.specie === animalName.name;
  const population = data.species.filter(getPopularity);
  return population[0].residents.length;
}

function animalsWithSex(animal) {
  let totalCount = 0;
  const getPopularity = (animalName) => animal.specie === animalName.name;
  const population = data.species.filter(getPopularity);

  const count = (individual) => {
    if (individual.sex === animal.sex) {
      totalCount += 1;
    }
  };
  population[0].residents.forEach(count);
  return totalCount;
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return allAnimals();
  }
  if (Object.keys(animal).length === 1) {
    return animalsWithoutSex(animal);
  }
  if (Object.keys(animal).length === 2) {
    return animalsWithSex(animal);
  }
}

module.exports = countAnimals;

console.log(countAnimals());
console.log(countAnimals({ specie: 'giraffes'}));
console.log(countAnimals({ specie: 'giraffes', sex: 'male' }));

