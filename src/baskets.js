const items = require('./items');

const basket1 = [
  { qty: 1, item: items.skittles },
  { qty: 1, item: items.walkman },
  { qty: 1, item: items.popcorn},
];

const basket2 = [
  { qty: 1, item: items.vanillaHazelnutCoffee},
  { qty: 1, item: items.vespa},
];

const basket3 = [
  { qty: 1, item: items.snickers},
  { qty: 1, item: items.discman},
  { qty: 1, item: items.wine},
  { qty: 1, item: items.fairTradeCoffee},
];

module.exports = [basket1, basket2, basket3];
