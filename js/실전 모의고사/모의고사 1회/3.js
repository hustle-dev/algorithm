const solution = height => {
  const answer = Array(height.length).fill(0);
  const stack = [];

  for (let i = height.length - 1; i >= 0; i--) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      answer[stack[stack.length - 1]] = i + 1;
      stack.pop();
    }

    stack.push(i);
  }

  return answer;
};

console.log(solution([50, 57, 52, 53, 51]));
