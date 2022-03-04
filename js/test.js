const solution = (nums, m) => {
  let lt = 0;
  let rt = Number.MAX_SAFE_INTEGER;
  let answer = 0;

  const count = len => {
    let cnt = 0;
    let sum = len;
    for (let x of nums) {
      if (sum - x < 0) {
        cnt += 1;
        sum = len - x;
      } else {
        sum -= x;
      }
    }
    return cnt + 1;
  };

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
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3));
