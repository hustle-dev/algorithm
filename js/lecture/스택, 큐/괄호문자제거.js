const solution = s => {
  const stack = [];

  for (const str of s) {
    if (str === ')') {
      while (stack[stack.length - 1] !== '(') {
        stack.pop();
      }
      stack.pop();
    } else stack.push(str);
  }

  return stack.join('');
};

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
