function solution(n) {
  let answer = 0;
  const m = parseInt(n / 2) + 1;
  const arr = Array.from({ length: m }, (v, i) => i + 1);
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < m; rt++) {
    sum += arr[rt];

    while (sum > n) {
      sum -= arr[lt];
      lt += 1;
    }

    if (sum === n) answer += 1;
  }

  return answer;
}

console.log(solution(98765));
