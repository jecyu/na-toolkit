(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.naToolkit = factory());
}(this, (function () { 'use strict';

  /**
   * Multiplies a value by 2.
   *
   *
   * @param value
   * @returns
   * @anotherNote
   */
  function double(value) {
      return value * 2;
  }

  // Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  var naToolkit = {
      double: double
  };

  return naToolkit;

})));
//# sourceMappingURL=na-toolkit.umd.js.map
