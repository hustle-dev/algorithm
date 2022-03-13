const solution = weight => {
  weight.sort((a, b) => a - b);

  let answer = 0;
  let lt = 0;
  let rt = weight.length - 1;

  while (lt <= rt) {
    if (weight[lt] + weight[rt] <= 3) {
      answer++;
      lt++;
      rt--;
    } else {
      answer++;
      rt--;
    }
  }

  return answer;
};

console.log(solution([1.01, 1.99, 2.5, 1.5, 1.01]));
console.log(solution([1.4, 1.991, 1.01, 1.32]));
