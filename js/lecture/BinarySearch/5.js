function solution(nums, K) {
  let answer = 0;
  let lt = 0;
  let rt = Number.MAX_SAFE_INTEGER;

  function count(len) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count += Math.floor(nums[i] / len);
    }
    return count;
  }

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (count(mid) >= K) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution([802, 743, 457, 539], 11));
