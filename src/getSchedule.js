const data = require('../data/zoo_data');

// Função que monta o objeto com a agenda completa do zoo
function allDays(weekDays) {
  const schedule = {};
  const getOfficeHour = (day) => {
    const officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
    const exhibition = [];
    data.species.forEach((specie) => {
      if (specie.availability.some((animalDay) => animalDay === day)) {
        exhibition.push(specie.name);
      }
    });
    if (exhibition.length === 0) {
      schedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      schedule[day] = { officeHour, exhibition };
    }
  };
  weekDays.forEach((getOfficeHour));
  return schedule;
}

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(data.hours); // Array com os dias da semana
  const animals = data.species.map((specie) => specie.name); // Array com as espécies de animais
  const completeShedule = allDays(weekDays); // Armazena Objeto com a agenda completa

  if (scheduleTarget === undefined) {
    return completeShedule;
  } if (weekDays.some((day) => day === scheduleTarget)) {
    return { [scheduleTarget]: completeShedule[scheduleTarget] };
  } if (animals.some((animal) => animal === scheduleTarget)) {
    const animal = data.species.find((specie) => specie.name === scheduleTarget);
    return animal.availability;
  }

  return completeShedule; // Entra aqui Se o argumento da função for qualquer outra coisa
}

module.exports = getSchedule;

// console.log(getSchedule());
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Wednesday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('Qualquer Coisa'));
