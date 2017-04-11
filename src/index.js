// var uniqueRandomArray = require('unique-random-array');
// var marvelHeroNames = require('./marvelHeroesNames.json');
import uniqueRandomArray from 'unique-random-array';
import marvelHeroNames from './marvelHeroesNames.json';
var getRandomItem = uniqueRandomArray(marvelHeroNames);
module.exports = {
  all : marvelHeroNames,
  random : random
};
function random(number) {
  if(number === undefined){
    return getRandomItem();
  } else{
    var randomItems = [];
    for(var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
