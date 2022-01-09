const data = require('../data/zoo_data');

// function getLocal() monta o objeto com as regiões NE, NW, SE e SW
function getLocal() {
  const result = {};
  const getMap = (specie) => ({ [specie.location]: [] });
  const map = data.species.map(getMap);
  map.forEach((element) => Object.assign(result, element));

  return result;
}

// function localAnimals() adiciona ao objeto "local" os animais de cada região (NE, NW, SE e SW)
function localAnimals(local) {
  const animalsLocal = (specie) => {
    local[specie.location].push(specie.name);
  };
  data.species.forEach(animalsLocal);
  return local;
}

// Monta o array com APENAS o nome dos indivíduos fêmea de cada espécie
function getFemale(local) {
  const getAnimals = (specie) => {
    const females = [];
    specie.residents.forEach((individual) => {
      if (individual.sex === 'female') {
        females.push(individual.name);
      }
    });
    local[specie.location].push({
      [specie.name]: females,
    });
  };

  data.species.forEach(getAnimals);
  return local;
}

// Monta o array com APENAS o nome dos indivíduos macho de cada espécie
function getMale(local) {
  const getAnimals = (specie) => {
    const males = [];
    specie.residents.forEach((individual) => {
      if (individual.sex === 'male') {
        males.push(individual.name);
      }
    });
    local[specie.location].push({
      [specie.name]: males,
    });
  };

  data.species.forEach(getAnimals);
  return local;
}

// A function sortAnimalNames() ordena o array com o nome dos animais
function sortAnimalNames(local) {
  const localKeys = Object.keys(local);
  const sorted = (region) => {
    local[region].forEach((especie) => Object.values(especie)[0].sort());
  };
  localKeys.forEach(sorted);
  return local;
}

function animalsName(local, element) {
  if (element.sex === 'female') {
    getFemale(local);
  } else if (element.sex === 'male') {
    getMale(local);
  } else { // se o sexo não for definido, monta o array com o nome dos indivíduos de cada espécie
    const getAnimals = (specie) => {
      local[specie.location].push({
        [specie.name]: specie.residents.map((individual) => individual.name) });
    };
    data.species.forEach(getAnimals);
  }

  if (element.sorted === true) { // Chama a função para ordenar o array com o nome dos animais
    sortAnimalNames(local);
  }
  return local;
}

function getAnimalMap(...options) {
  const local = getLocal(); // Monta o objeto com as regiões NE, NW, SE e SW
  const [element] = options;

  if (options.length === 0 || element.includeNames === undefined) {
    localAnimals(local);
  } else if (element.includeNames === false) {
    localAnimals(local);
  } else if (element.includeNames === true) {
    animalsName(local, element);
  }

  return local;
}

module.exports = getAnimalMap;

// console.log(getAnimalMap());
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ sex: 'female', sorted: true }));
// console.log(getAnimalMap({ includeNames: false }));

// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'male', sorted: true }));
