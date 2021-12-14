const solution = s => {
  const stack = [];
  const answer = [];
  const m = new Map();
  for (const c of s) {
    m.set(c, m.get(c) + 1 || 1);
  }

  for (const c of s) {
    while (
      stack.length &&
      c.charCodeAt() < stack[stack.length - 1].charCodeAt() &&
      m.get(stack[stack.length - 1]) > 1
    ) {
      m.set(stack[stack.length - 1], m.get(stack[stack.length - 1]) - 1);
      stack.pop();
    }
    stack.push(c);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    if (m.get(stack[i]) > 1) {
      m.set(stack[i], m.get(stack[i]) - 1);
      continue;
    }
    answer.push(stack[i]);
  }

  return answer.reverse().join('');
};

console.log(solution('bcabc'));
console.log(solution('cbacdcbc'));
