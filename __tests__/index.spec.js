(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.stubEvent get value', function () {
      var event1 = { target: { value: 'abc' } };
      var event2 = null;
      expect(nx.stubEventValue(event1)).toBe('abc');
      expect(nx.stubEventValue(event2)).toBe(null);
    });

    test('nx.stubEvent wrap value', function () {
      var value = 'abc';
      expect(nx.stubEventTarget(value)).toEqual({ target: { value: 'abc' } });
    });
  });
})();
