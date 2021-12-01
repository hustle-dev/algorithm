function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      const n2 = Number(stack.pop());
      const n1 = Number(stack.pop());
      if (s[i] === '+') stack.push(n1 + n2);
      else if (s[i] === '*') stack.push(n1 * n2);
      else if (s[i] === '/') stack.push(n1 / n2);
      else if (s[i] === '-') stack.push(n1 - n2);
    } else {
      stack.push(s[i]);
    }
  }

  return stack[0];
}

console.log(solution('352+*9-'));
