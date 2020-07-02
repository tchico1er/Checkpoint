const {
  exampleVariable,
  myFirstVariable,
  mySecondVariable,
  myThirdVar,
  myFourthVar,
  myAge,
  myAgeCalc,
  numExpression,
} = require('./index.js');

var assert = require('assert');
describe('Varibales', function () {
  describe('exampleVariable', function () {
    it('data type should be equal to string', function () {
      assert.equal(typeof exampleVariable, 'string');
    });
  });
  describe('myFirstVariable', function () {
    it('data type should be equal to null', function () {
      var isNull = typeof myFirstVariable === 'object' && !myFirstVariable;
      assert.equal(isNull, true);
    });
  });
  describe('mySecondVariable', function () {
    it('equal the data type boolean', function () {
      assert.equal(typeof mySecondVariable, 'boolean');
    });
  });
  describe('myThirdVar', function () {
    it('should be equal to the data type boolean', function () {
      assert.equal(myThirdVar, 'hello world');
    });
  });
  describe('myFourthVar', function () {
    it('should equal to the data type boolean', function () {
      assert.equal(myFourthVar, 'This Is Case Sensitive');
    });
  });
  describe('myAge', function () {
    it('should be data type number', function () {
      assert.equal(typeof myAge, 'number');
    });
  });
  describe('myAgeCalc', function () {
    it('should equal to myAge variable from question 5', function () {
      var isTheSame = myAgeCalc === myAge;
      assert.equal(isTheSame, true);
    });
  });
  describe('numExpression', function () {
    it('Should be equal to the correct number', function () {
      var isCorrect = numExpression === 5;
      assert.equal(isCorrect, true);
    });
  });
});

console.log('');
