const solution = (n, k) => {
  const stack = Array.from({ length: n }, (_, i) => i + 1);

  while (stack.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      const repush = stack.shift();
      stack.push(repush);
    }
    stack.splice(0, 1);
  }

  return stack[0];
};

console.log(solution(8, 3));
