/*!
 * name: @feizheng/next-stub-event
 * description: Stub event for react component.
 * url: https://github.com/afeiship/next-stub-event
 * version: 1.0.0
 * date: 2020-02-09 23:29:31
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.stubEventValue = function(inEvent) {
    var target = inEvent.target;
    return target ? target.value : null;
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
