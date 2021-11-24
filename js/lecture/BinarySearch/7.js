function solution(nums, c) {
  let answer = 0;
  let lt = 0;
  let rt = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  function count(dist) {
    let count = 1;
    let curX = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - curX >= dist) {
        count++;
        curX = nums[i];
      }
    }

    return count;
  }

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));
