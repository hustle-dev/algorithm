if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function');

    var arr = [];

    thisArg = thisArg || window;

    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) arr.push(this[i]);
    }

    return arr;
  };
}
