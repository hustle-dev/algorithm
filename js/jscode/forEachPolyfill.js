if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArgs) {
    if (typeof callback !== 'function') throw new TypeError('not a function');

    thisArgs = thisArgs || window;

    for (let i = 0; i < this.length; i++) {
      callback.call(thisArgs, this[i], i, this);
    }
  };
}
