const data = require('../data/zoo_data');

function getFistSpecies(id) {
  let idFistSpecie = '';
  const findAnimal = (person) => {
    if (person.id === id) {
      const [fist] = person.responsibleFor;
      idFistSpecie = fist;
    }
  };
  data.employees.forEach(findAnimal);
  return idFistSpecie;
}

function getOldestFromFirstSpecies(id) {
  const idFistSpecie = getFistSpecies(id);

  const getSpecie = data.species.find((specie) => specie.id === idFistSpecie);

  let oldest = getSpecie.residents[0];

  const findOldest = (animal) => {
    if (oldest.age < animal.age) {
      oldest = animal;
    }
  };
  getSpecie.residents.forEach(findOldest);

  return [oldest.name, oldest.sex, oldest.age];
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
