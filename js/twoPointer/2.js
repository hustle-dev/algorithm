function solution(nums, k) {
  const answer = [];
  const sH = new Map();

  for (let i = 0; i < k - 1; i++) {
    sH.set(nums[i], sH.get(nums[i]) + 1 || 1);
  }

  for (let i = k - 1; i < nums.length; i++) {
    sH.set(nums[i], sH.get(nums[i]) + 1 || 1);
    answer.push(Array.from(sH.keys()).length);
    if (sH.get(nums[i - (k - 1)]) === 1) sH.delete(nums[i - (k - 1)]);
    else sH.set(nums[i - (k - 1)], sH.get(nums[i - (k - 1)]) - 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));
