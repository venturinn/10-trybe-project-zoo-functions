const data = require('../data/zoo_data');

/*
const entrantsArray = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

prices: {
  adult: 49.99,
  senior: 24.99,
  child: 20.99,
}
*/

function countEntrants(entrants) {
  let childTotal = 0;
  let adultTotal = 0;
  let seniorTotal = 0;

  const calculate = (person) => {
    if (person.age < 18) {
      childTotal += 1;
    } else if (person.age >= 18 && person.age < 50) {
      adultTotal += 1;
    } else {
      seniorTotal += 1;
    }
  };

  entrants.map(calculate);

  return { child: childTotal, adult: adultTotal, senior: seniorTotal };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);

  const totalPaymentChild = data.prices.child * totalEntrants.child;
  const totalPaymentadult = data.prices.adult * totalEntrants.adult;
  const totalPaymentsenior = data.prices.senior * totalEntrants.senior;

  return totalPaymentChild + totalPaymentadult + totalPaymentsenior;
}

// console.log(calculateEntry(entrantsArray));
// console.log(calculateEntry());
// console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
