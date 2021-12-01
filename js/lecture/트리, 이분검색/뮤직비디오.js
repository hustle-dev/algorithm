function solution(nums, m) {
  let answer = 0;
  let lt = 0;
  let rt = Number.MAX_SAFE_INTEGER;

  function count(size) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (size < sum + nums[i]) {
        count += 1;
        sum = nums[i];
      } else {
        sum += nums[i];
      }
    }

    return count + 1;
  }

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3));
