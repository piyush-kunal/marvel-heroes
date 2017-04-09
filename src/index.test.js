var expect = require('chai').expect;
var marvel = require('./index');

describe('marvel-heroes', function() {
  describe('all', function() {
    it('should be an array of string', function() {
      expect(marvel.all).satisfy(isArrayOfStrings);
      function isArrayOfStrings(array){
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });
    it('should contain `Piyush Kunal`', function() {
      expect(marvel.all).to.include('Piyush Kunal');
    });
  });
  describe('random', function() {
    it('it should return random item from marvel list', function() {
      var randomItem = marvel.random();
      expect(marvel.all).to.include(randomItem);
    });
  });
});
