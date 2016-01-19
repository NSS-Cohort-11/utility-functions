var expect = require('chai').expect;

describe('Mocha & Chai', function () {
  it('truthyness', function () {
    expect(true).to.be.true;
  });
});

describe('async tests', function () {
  it('arrays have length', function (done) {
    var array = [1,2,3];

    setTimeout(function () {
      expect(array.length).to.exist;
      done();
    }, 0);
  });
});

describe('helloWorld', function () {
  it('hello should return world', function () {
    var hello = require('../helloWorld');

    expect(hello()).to.equal('world');
  });
});
