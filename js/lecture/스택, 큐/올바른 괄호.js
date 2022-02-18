const solution = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
};

console.log(solution('(()(()))(()'));
console.log(solution('(())()'));
