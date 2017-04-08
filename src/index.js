var uniqueRandomArray = require('unique-random-array');
var marvelHeroNames = require('./marvelHeroesNames.json');

module.exports = {
  all : marvelHeroNames,
  random : uniqueRandomArray(marvelHeroNames)
};
