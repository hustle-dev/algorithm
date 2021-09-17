function solution(n, k) {
  const stack = [];

  for (let i = 1; i <= n; i++) {
    stack.push(i);
  }

  while (stack.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      const repush = stack.shift();
      stack.push(repush);
    }
    stack.shift();
  }

  return stack[0];
}

console.log(solution(8, 3));
