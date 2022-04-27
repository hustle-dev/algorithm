if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initial) {
    if (typeof callback !== 'function') throw new TypeError('not a function');

    let initialV = initial;

    for (let i = 0; i < this.length; i++) {
      callback(initialV, this[i]);
    }

    return initialV;
  };
}

Array.prototype.myreduce = function (callback, initial) {
  if (typeof callback !== 'function') throw new TypeError('not a function');

  let initialV = initial;

  for (let i = 0; i < this.length; i++) {
    initialV = initialV === undefined ? this[i] : callback(initialV, this[i]);
  }

  return initialV;
};

// Array.prototype.myreduce = function (callback, initial) {
//   if (typeof callback !== 'function') throw new TypeError('not a function');

//   for (let i = 0; i < this.length; i++) {
//     initial = initial !== undefined ? callback(initial, this[i]) : this[i];
//   }

//   return initial;
// };

const arr = [2, 5, 5];

console.log(
  arr.myreduce((acc, cur) => {
    console.log(acc, cur);
    return acc + cur;
  }, 0)
);
