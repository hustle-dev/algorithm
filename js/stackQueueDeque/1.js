function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (stack.length === 0) {
        return 'NO';
      } else {
        stack.pop();
      }
    } else {
      stack.push('(');
    }
  }

  if (stack.length > 0) {
    return 'NO';
  }

  return 'YES';
}

console.log(solution('(()(()))(()'));
