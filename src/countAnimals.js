const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {

   let total = {}

    const getPopularity = (animalName) => (animalName.popularity);
    const popularity = data.species.map(getPopularity);
    const [aa, bb, cc, dd, ee, ff, gg, hh, ii] = popularity;

    const getAnimals = (animalName) => ({

     a:sanimalName.popularity

     });
    const animalsName = data.species.map(getAnimals);
    
    return animalsName;
  }
  if (Object.keys(animal).length === 1) {
    const getPopularity = (animalName) => animal.specie === animalName.name;
    const popularity = data.species.filter(getPopularity);
    return popularity[0].popularity;
  }
}

module.exports = countAnimals;

console.log(countAnimals());
