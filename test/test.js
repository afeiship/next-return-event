var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-stub-event');

describe('next/stubEvent', function () {

  it('nx.stubEventValue', function () {
    var evt = { target: { value: 'test'}}
    var rs = nx.stubEventValue(evt);
    assert.equal(rs, 'test');
  });

  it('nx.stubEventTarget', function () {
    var rs = nx.stubEventTarget('test');
    assert.deepEqual(rs.target.value, 'test');
  });

});
