const data = require('../data/zoo_data');

// função busca o objeto com os dados do funcionário pesquisado, se não encontrar retorna undefined
function getEmploeeData(arg) {
  const Key = Object.keys(arg);

  let personObject = {};

  if (Key[0] === 'name') {
    const findEmploee = ((emp) => arg[Key[0]] === emp.firstName || arg[Key[0]] === emp.lastName);
    personObject = data.employees.find(findEmploee);
  } if (Key[0] === 'id') {
    personObject = data.employees.find((emp) => arg[Key[0]] === emp.id);
  }
  return personObject;
}

// função monta o objeto com apenas a cobertura do funcionário recebido via 'employeeData'
function makeEmployCoverage(employeeData) {
  const speciesId = employeeData.responsibleFor;
  const speciesNames = [];
  const speciesLocalitions = [];

  data.species.forEach((specie) => {
    if (speciesId.some((specieId) => specieId === specie.id)) {
      speciesNames.push(specie.name);
      speciesLocalitions.push(specie.location);
    }
  });
  const coverage = {
    id: employeeData.id,
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    species: speciesNames,
    locations: speciesLocalitions,
  };

  return coverage;
}

// Função monta array composto por objetos com a cobertura de todos os funcionários
function allEmEmployeesCoverage() {
  const employees = [];
  data.employees.forEach((employee) => employees.push(makeEmployCoverage(employee)));
  return employees;
}

function getEmployeesCoverage(employee) {
  if (employee === undefined) { // Será undefined se a função for chamada sem argumentos
    return allEmEmployeesCoverage();
  }
  const employeeData = getEmploeeData(employee);

  if (employeeData === undefined) { // Será undefined se nenhum funcionário for encontrado
    throw new Error('Informações inválidas');
  } else {
    return makeEmployCoverage(employeeData);
  }
}

module.exports = getEmployeesCoverage;

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage({ name: 'Venturin' }));
// console.log(getEmployeesCoverage());
