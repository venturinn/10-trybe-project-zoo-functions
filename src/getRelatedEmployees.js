const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
// seu código aqui

  const verifyManagers = (haveManagers) => haveManagers === id;
  return employees.some((element) => element.managers.some(verifyManagers));
}

function getRelatedEmployees(managerId) {
  // seu código aqui

  const verify = isManager(managerId);

  if (verify === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const verifySubordinates = (employee) => {
      if (employee.managers.some((element) => element === managerId)) {
        return `${employee.firstName} ${employee.lastName}`;
      }
    };
    const subordinates = employees.map((verifySubordinates));
    const subordinatesFilter = subordinates.filter((element) => element !== undefined);
    return subordinatesFilter;
  }
}

module.exports = { isManager, getRelatedEmployees };

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
