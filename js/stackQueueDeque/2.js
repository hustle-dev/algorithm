function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      while (stack[stack.length - 1] !== '(') {
        stack.pop();
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
