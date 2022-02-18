const solution = (need, plan) => {
  const stack = need.split('');

  for (let i = plan.length - 1; i >= 0; i--) {
    if (stack[stack.length - 1] === plan[i]) stack.pop();
  }

  return stack.length === 0 ? 'YES' : 'NO';
};

console.log(solution('CBA', 'CBDAGE'));
console.log(solution('CBA', 'CBDBAGE'));
