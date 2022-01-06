const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui

  const verify = (person) => person.firstName === employeeName || person.lastName === employeeName;
  const employee = employees.find(verify);
  const result = (employee !== undefined) ? employee : {};

  return result;
}

module.exports = getEmployeeByName;

// console.log(getEmployeeByName('Bethea'));
