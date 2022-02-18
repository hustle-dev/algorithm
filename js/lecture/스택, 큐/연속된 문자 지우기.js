const solution = s => {
  const stack = [];

  for (const str of s) {
    if (stack[stack.length - 1] === str) stack.pop();
    else stack.push(str);
  }

  return stack.join('');
};

console.log(solution('acbbcaa'));
console.log(solution('bacccaba'));
