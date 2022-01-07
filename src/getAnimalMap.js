const data = require('../data/zoo_data');

function getLocal() {
  const result = {};
  const getMap = (specie) => ({ [specie.location]: [] });
  const map = data.species.map(getMap);
  map.forEach((element) => Object.assign(result, element));

  return result;
}

function localAnimals(local) {
  const animalsLocal = (specie) => {
    local[specie.location].push(specie.name);
  };
  data.species.forEach(animalsLocal);
  return local;
}

function animalsName(local) {
  const getAnimals = (specie) => {
    local[specie.location].push({
      [specie.name]: specie.residents.map((individual) => individual.name) });
  };
  data.species.forEach(getAnimals);
  return local;
}

function getAnimalMap(...options) {
  const local = getLocal();
  const [element] = options;

  if (Object.keys(options).length === 0) {
    localAnimals(local);
  } else if (element.sex === 'female') {
    localAnimals(local);
  } else if (element.sex === 'female' && element.sorted === true) {
    localAnimals(local);
  } else if (Object.keys(element).length === 1 && element.includeNames === true) {
    animalsName(local);
  } else if (element.includeNames === true && element.sorted === true) {
    animalsName(local);
    const localKeys = Object.keys(local);
    const sorted = (region) => {
      const especies = local[region].forEach((especie) => Object.values(especie)[0].sort());
    };
    localKeys.forEach(sorted);
  }

 return local;
}

module.exports = getAnimalMap;

// console.log(getAnimalMap());
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ sex: 'female', sorted: true }));

// console.log(getAnimalMap({ includeNames: true }));

// console.log(getAnimalMap({ includeNames: true, sorted: true }));

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));


