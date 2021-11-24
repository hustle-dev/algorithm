function solution(nums, m) {
  let answer = 0;
  nums.sort((a, b) => a - b);

  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (nums[mid] === m) {
      answer = mid + 1;
      break;
    } else if (nums[mid] < m) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
