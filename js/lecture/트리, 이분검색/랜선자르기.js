const solution = (nums, K) => {
  let lt = 0;
  let rt = 1000000;
  let answer = 0;

  const count = len => {
    let cnt = 0;
    for (const x of nums) {
      cnt += Math.floor(x / len);
    }
    return cnt;
  };

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(mid) >= K) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
};

console.log(solution([802, 743, 457, 539], 11));
