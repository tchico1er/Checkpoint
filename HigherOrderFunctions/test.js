var assert = require('assert');
var chai = require('chai'),
  expect = chai.expect,
  sinonChai = require('sinon-chai'),
  sinon = require('sinon');

var _ = require('lodash');

const { higherOrder, q2, forEach, map } = require('./index.js');

var assert = require('assert');
describe('HigherOrderFunctions', function () {
  describe('higherOrder', function () {
    beforeEach(function () {
      // sinon.spy(console, 'log');
      sinon.stub(console, 'log');
    });

    afterEach(function () {
      console.log.restore();
    });
    it('invokes the callback', function () {
      const callback = function () {
        console.log('hello');
      };
      higherOrder(callback);
      assert.equal(console.log.getCalls().length, 1);
    });
  });
  describe('q2', function () {
    it('returns the callbacks value when invoking it', function () {
      const callback = function () {
        return 'yes it worked';
      };
      assert.equal(q2(callback), 'yes it worked');
    });
  });
  describe('forEach', function () {
    beforeEach(function () {
      // sinon.spy(console, 'log');
      sinon.stub(console, 'log');
    });

    afterEach(function () {
      console.log.restore();
    });
    it('iterated over the whole array and invoked the callback on each element', function () {
      const callback = function (element) {
        console.log(element);
      };
      forEach([0, 0, 0, 0, 0, 0, 0, 0, 0], callback);
      assert.equal(console.log.getCalls().length, 9);
    });
  });
  describe('map', function () {
    it('iterated over the whole array and applies the callback on each element returning a new array with the return value of each call', function () {
      const callback = function (element) {
        return element * 2;
      };
      const answer = map([1, 2, 3, 4, 5, 6], callback);
      assert.equal(
        JSON.stringify(answer),
        JSON.stringify([2, 4, 6, 8, 10, 12])
      );
    });
  });
});

console.log('');
