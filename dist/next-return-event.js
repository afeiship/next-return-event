(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.returnEventValue = function (inEvent) {
    var target = inEvent.target;
    return target ? target.value : null;
  };

  nx.returnEventTarget = function (inValue) {
    return {
      target: { value: inValue }
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.returnEvent;
  }

}());
