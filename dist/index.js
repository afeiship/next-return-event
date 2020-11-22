/*!
 * name: @jswork/next-stub-event
 * description: Stub event for react component.
 * homepage: https://github.com/afeiship/next-stub-event
 * version: 1.0.0
 * date: 2020-11-22 16:55:35
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.stubEventValue = function (inEvent) {
    return nx.get(inEvent, 'target.value', null);
  };

  nx.stubEventTarget = function (inValue) {
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
