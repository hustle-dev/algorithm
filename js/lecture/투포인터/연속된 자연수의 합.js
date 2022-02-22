const solution = n => {
  const half = Math.ceil(n / 2);
  let answer = 0;

  let lt = 0;
  let rt = 1;
  let sum = 0;

  while (rt <= half) {
    sum += rt;

    while (sum > n) {
      sum -= lt;
      lt++;
    }
    if (sum === n) answer++;
    rt++;
  }

  return answer;
};

console.log(solution(15));
console.log(solution(45678));
console.log(solution(98765));
