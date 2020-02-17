/*!
 * name: @feizheng/next-stub-event
 * description: Stub event for react component.
 * url: https://github.com/afeiship/next-stub-event
 * version: 1.0.1
 * date: 2020-02-17 13:24:17
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.stubEventValue = function(inEvent) {
    return nx.get(inEvent, 'target.value', null);
  };

  nx.stubEventTarget = function(inValue) {
    return {
      target: { value: inValue }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      stubEventValue: nx.stubEventValue,
      stubEventTarget: nx.stubEventTarget
    };
  }
})();

//# sourceMappingURL=next-stub-event.js.map
