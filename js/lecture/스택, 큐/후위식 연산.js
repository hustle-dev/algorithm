const solution = s => {
  const stack = [];

  for (const str of s) {
    if (isNaN(str)) {
      const n2 = Number(stack.pop());
      const n1 = Number(stack.pop());
      if (str === '+') stack.push(n1 + n2);
      else if (str === '-') stack.push(n1 - n2);
      else if (str === '*') stack.push(n1 * n2);
      else stack.push(n1 / n2);
    } else {
      stack.push(str);
    }
  }

  return stack[0];
};

console.log(solution('352+*9-'));
