if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArgs) {
    if (typeof callback !== 'function') throw new TypeError('not a function');

    thisArgs = thisArgs || window;

    var arr = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
      arr[i] = callback.call(thisArgs, this[i], i, this);
    }

    return arr;
  };
}
