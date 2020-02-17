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
