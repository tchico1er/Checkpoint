var assert = require('assert');
var chai = require('chai'),
  expect = chai.expect,
  sinonChai = require('sinon-chai'),
  sinon = require('sinon');

var _ = require('lodash');
const {
  helloWorld3Times,
  dynamicHelloWorld,
  logEachChar,
  checkIfCharExists,
  indexOf,
  fizzBuzz,
  fibonacci,
} = require('./index.js');

chai.should();
chai.use(sinonChai);

describe('LOOPS', function () {
  beforeEach(function () {
    // sinon.spy(console, 'log');
    sinon.stub(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  describe('example', function () {
    it('should log to the console 3 times', function () {
      helloWorld3Times();
      assert.equal(console.log.getCalls().length, 3);
    });
    it('should log to the console hello world', function () {
      helloWorld3Times();
      assert(console.log.alwaysCalledWith('hello world'));
    });
  });

  describe('dynamicHelloWorld', function () {
    it('should log hello world to the console as many times as the argument', function () {
      var number = Math.floor(Math.random() * 10 + 1);
      dynamicHelloWorld(number);
      assert.equal(console.log.getCalls().length, number);
    });
    it('should log to the console hello world', function () {
      var number = Math.floor(Math.random() * 10 + 1);
      dynamicHelloWorld(number);
      assert(console.log.alwaysCalledWith('hello world'));
    });
  });

  describe('logEachChar', function () {
    it('console.log should be called as many times as the strings length', function () {
      const string = 'hello world';
      logEachChar('hello world');
      assert.equal(console.log.getCalls().length, string.length);
    });
    it('should log to the console each character', function () {
      const string = 'what is up';
      logEachChar(string);
      assert(
        _.isEqual(
          console.log.args.map((el) => el[0]),
          string.split('')
        )
      );
    });
  });

  describe('checkIfCharExists', function () {
    beforeEach(function () {
      // sinon.spy(console, 'log');
      sinon.spy(String.prototype, 'indexOf');
    });

    afterEach(function () {
      String.prototype.indexOf.restore();
    });
    it('should return false if there is no match', function () {
      const string = 'hello world';
      assert(checkIfCharExists(string, 'c') === false);
    });
    it('should return true if there is a match', function () {
      const string = 'carrots';
      assert(checkIfCharExists(string, 'c') === true);
    });
    it('should NOT use indexOf', function () {
      const string = 'is there indexOf here';
      checkIfCharExists(string, 'c');
      assert(String.prototype.indexOf.getCalls().length === 0);
    });
  });

  describe('indexOf', function () {
    beforeEach(function () {
      // sinon.spy(console, 'log');
      sinon.spy(String.prototype, 'indexOf');
    });

    afterEach(function () {
      String.prototype.indexOf.restore();
    });
    it('should return -1 if there is no match', function () {
      const string = 'the character';
      assert(indexOf(string, 'z') === -1);
    });
    it('should return the index of the first match', function () {
      const string = 'the character';
      assert(indexOf(string, 'c') === 4);
    });
    it('should NOT use indexOf', function () {
      const string = 'is there indexOf here';
      indexOf(string, 'c');
      assert(String.prototype.indexOf.getCalls().length === 0);
    });
  });

  describe('fizzBuzz', function () {
    it('should print out the correct response', function () {
      var number = Math.floor(Math.random() * 21);
      fizzBuzz(number);
      const checkFizzBuzz = (array) => {
        if (!array.length) {
          return false;
        }
        let flag = true;
        array.forEach((el, idx) => {
          if ((idx + 1) % 3 === 0 && (idx + 1) % 5 === 0 && el === 'FizzBuzz') {
            // continue
          } else if ((idx + 1) % 3 === 0 && el === 'Fizz') {
            // continue
          } else if ((idx + 1) % 5 === 0 && el === 'Buzz') {
            // continue
          } else if (idx + 1 === parseInt(el)) {
            // continue
          } else {
            flag = false;
          }
        });
        return flag;
      };
      const arguments = console.log.args.map((el) => el[0]);
      assert(checkFizzBuzz(arguments));
    });
  });

  describe('fibonacci', function () {
    it('should give 1 for the first number', function () {
      assert(fibonacci(1) === 1);
    });
    it('should give 1 for the second number', function () {
      assert(fibonacci(2) === 1);
    });
    it('should give the correct number in the sequence', function () {
      assert(fibonacci(8) === 21);
    });
  });
});

console.log('');
