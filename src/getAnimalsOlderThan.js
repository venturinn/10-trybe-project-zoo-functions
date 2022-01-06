const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  const animalUser = data.species.find((element) => element.name === animal);
  return animalUser.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;

// console.log(getAnimalsOlderThan('bears', 4));
