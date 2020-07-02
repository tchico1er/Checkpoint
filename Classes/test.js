var assert = require('assert');
var _ = require('lodash');
var chai = require('chai'),
  expect = chai.expect,
  sinonChai = require('sinon-chai'),
  sinon = require('sinon');

var _ = require('lodash');
const { MyFirstClass, MySecondClass } = require('./index.js');

chai.should();
chai.use(sinonChai);

describe('CLASSES', function () {
  describe('MyFirstClass', function () {
    it('has the property name', function () {
      assert(new MyFirstClass('hello').name !== undefined);
    });
    it('has the property name that equals to the argument given', function () {
      assert(new MyFirstClass('hello').name === 'hello');
    });
    it('has the property type equaling "parent class"', function () {
      assert(new MyFirstClass('hello').type === 'parent class');
    });
    it('has the method getNumberOfChars on the __proto__ of the instance', function () {
      assert(
        new MyFirstClass('hello').__proto__.getNumberOfChars !== undefined
      );
    });
    it('has the method getNumberOfChars on the prototype', function () {
      assert(MyFirstClass.prototype.getNumberOfChars !== undefined);
    });
    it('has a method getNumberOfChars that outputs the length of the name', function () {
      assert(new MyFirstClass('what is going on').getNumberOfChars() === 16);
    });
  });
  describe('MySecondClass', function () {
    it('Inherits the property type from MyFirstClass', function () {
      assert(new MySecondClass('hello').type === 'parent class');
    });
    it('Inherits the method getNumberOfChars from MyFirstClass', function () {
      assert(new MySecondClass('hello').getNumberOfChars !== undefined);
    });
    it('getNumberOfChars is still outputting the number of characters of the property name', function () {
      assert(new MySecondClass('hello').getNumberOfChars() === 5);
    });
    it('should have the prototypes constructor equal to MySecondClass', function () {
      console.log('look at me', new MySecondClass('hello').constructor.name);
      assert(
        _.isEqual(new MySecondClass('hello').constructor.name, 'MySecondClass')
      );
    });
  });
});

console.log('');
