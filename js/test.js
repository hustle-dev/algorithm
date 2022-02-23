const solution = nums => {
  nums.sort((a, b) => (b[0] === a[0] ? b[1] - a[1] : b[0] - a[0]));
  const m = new Map();
  let maxIndex = 0;
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxIndex < nums[i][1]) maxIndex = nums[i][1];
  }

  for (let i = 1; i <= maxIndex; i++) {
    m.set(i, i);
  }

  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i][1])) {
      answer += nums[i][0];
      if (m.get(nums[i][1]) === 1) m.delete(nums[i][1]);
      else m.set(nums[i][1], m.get(nums[i][1]) - 1);
      maxIndex -= 1;
    }

    if (maxIndex === 0) break;
  }

  return answer;
};

console.log(
  solution([
    [50, 2],
    [20, 1],
    [40, 2],
    [60, 3],
    [30, 3],
    [30, 1],
  ])
);

console.log(
  solution([
    [50, 2],
    [40, 2],
    [20, 1],
    [10, 1],
  ])
);
