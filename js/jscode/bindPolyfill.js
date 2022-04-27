if (!Function.prototype.bind) {
  Function.prototype.bind = function (thisArg) {
    return function () {
      this.apply(thisArg);
    };
  };
}

let obj = {
  name: 'Jack',
};

let myFunc = function () {
  console.log(`${this.name}`);
};

Function.prototype.myBind = function (thisArg) {
  let func = this;
  return function () {
    func.apply(thisArg);
  };
};

let newFunc = myFunc.myBind(obj);
newFunc(); // Jack
