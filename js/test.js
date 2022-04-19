const solution = (tstring, variables) => {
  const obj = {};
  const N = variables.length;
  const unf = new Array(N).fill(0);
  const stringArr = tstring.split(' ');

  for (const [variable, value] of variables) {
    obj[variable] = value;
  }

  for (let i = 0; i < stringArr.length; i++) {
    const str = stringArr[i];
    if (str === '{') {
      console.log(str);
    }
  }

  console.log(obj);
};

console.log(
  solution('this is {template} {template} is {state}', [
    ['template', 'string'],
    ['state', 'changed'],
  ]) // this is string string is changed
);

// console.log(solution('this is {template} {template} is {state}'), [
//   ['template', 'string'],
//   ['state', '{template}'],
// ]); // this is string string is string

// console.log(solution('this is {template} {template} is {state}'), [
//   ['template', '{state}'],
//   ['state', '{template}'],
// ]); // this is {template} {template} is {state}

// console.log(solution('this is {template} {template} is {state}'), [
//   ['template', '{state}'],
//   ['state', '{templates}'],
// ]); // this is {templates} {templates} is {templates}

// console.log(solution('{a} {b} {c} {d} {i}'), [
//   ['b', '{c}'],
//   ['a', '{b}'],
//   ['e', '{f}'],
//   ['h', 'i'],
//   ['d', '{e}'],
//   ['f', '{d}'],
//   ['c', 'd'],
// ]); // d d d {d} {i}
