const solution = (nums, c) => {
  nums.sort((a, b) => a - b);

  let lt = 1;
  let rt = Number.MAX_SAFE_INTEGER;
  let answer = 0;

  const maxDist = dist => {
    let cnt = 1;
    let cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - cur < dist) continue;

      cnt += 1;
      cur = nums[i];
    }

    return cnt;
  };

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (maxDist(mid) >= c) {
      answer = Math.max(answer, mid);
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
};

console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));
