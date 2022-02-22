// 이 부분의 핵심은 Map에 그동안의 합들을 저장해둠으로써, sum-m을 하였을 시,
// 그 값이 존재한다면, 이전 총합에서 빼면 m이 된다는 의미이므로 더해주어야함!

const solution = (nums, m) => {
  let sum = 0;
  let answer = 0;
  const newM = new Map();

  for (const n of nums) {
    sum += n;

    if (sum === m) answer += 1;
    if (newM.has(sum - m)) answer += newM.get(sum - m);

    newM.set(sum, newM.get(sum) + 1 || 1);
  }

  return answer;
};

console.log(solution([1, 2, 3, -3, 1, 2], 3));
console.log(solution([-1, 0, 1], 0));
console.log(solution([-1, -1, -1, 1], 0));
