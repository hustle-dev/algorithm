function solution(nums, m) {
  let answer = 0;
  const nH = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === m) answer += 1;
    if (nH.has(sum - m)) answer += nH.get(sum - m);

    nH.set(sum, nH.get(sum) + 1 || 1);
  }

  return answer;
}

console.log(solution([-1, -1, -1, 1], 0));
