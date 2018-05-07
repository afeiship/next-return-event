var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-return-event');

describe('next/returnEvent', function () {

  it('nx.returnEventValue', function () {
    var evt = { target: { value: 'test'}}
    var rs = nx.returnEventValue(evt);
    assert.equal(rs, 'test');
  });

  it('nx.returnEventTarget', function () {
    var rs = nx.returnEventTarget('test');
    assert.deepEqual(rs.target.value, 'test');
  });

});
