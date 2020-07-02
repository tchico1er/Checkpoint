const {
  example,
  firstFunction,
  helloWorld,
  question3,
  concatQuestion,
  subtraction,
  multiplication,
  square,
  answerToQuestion8,
  question8,
} = require('./index.js');
var assert = require('assert');

describe('FUNCTIONS', function () {
  describe('example', function () {
    var isTrue = example();
    it('should return true', function () {
      assert.equal(isTrue, true);
    });
  });
  describe('firstFunction', function () {
    it('should return false', function () {
      assert.equal(firstFunction(), false);
    });
  });
  describe('helloWorld', function () {
    it('should be data type string', function () {
      assert.equal(typeof helloWorld(), 'string');
    });
    it('should return hello world', function () {
      assert.equal(helloWorld(), 'hello world');
    });
  });
  describe('question3', function () {
    it('should return the undefined when no argument is given', function () {
      assert.equal(question3(), undefined);
    });
    it('should return the argument if it a random number', function () {
      var randomNumber = Math.random();
      assert.equal(question3(randomNumber), randomNumber);
    });
    it('should return "hello" when the argument hello is given', function () {
      assert.equal(question3('hello'), 'hello');
    });
  });
  describe('concatQuestion', function () {
    it('should return hello blake when blake is given as an argument', function () {
      assert.equal(concatQuestion('blake'), 'hello blake');
    });
    it('should return hello undefined when no argument is given', function () {
      assert.equal(concatQuestion(), 'hello undefined');
    });
  });
  describe('subtraction', function () {
    it('should subtract the second argument from the first', function () {
      const num1 = Math.floor(Math.random() * 101);
      const num2 = Math.floor(Math.random() * 101);
      const answer = num1 - num2;
      assert.equal(subtraction(num1, num2), answer);
    });
  });
  describe('multiplication', function () {
    it('should subtract the second argument from the first', function () {
      const num1 = Math.floor(Math.random() * 101);
      const num2 = Math.floor(Math.random() * 101);
      const answer = num1 * num2;
      assert.equal(multiplication(num1, num2), answer);
    });
  });
  describe('square', function () {
    it('should square the argument', function () {
      const num1 = Math.floor(Math.random() * 101);
      const answer = num1 * num1;
      assert.equal(square(num1), answer);
    });
  });
  describe('question8', function () {
    it('should return the data type string', function () {
      assert.equal(typeof question8(), 'string');
    });
    it('should return we can save return values in variables', function () {
      assert.equal(question8(), 'we can save return values in variables');
    });
    it('the variable answerToQuestion8 should equal we can save return values in variables', function () {
      assert.equal(answerToQuestion8, 'we can save return values in variables');
    });
  });
});
