const solution = nums => {
  const dp = new Array(nums.length).fill(0);
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === 1) sum += 1;
    }
    dp[i] = [sum, i];
  }

  dp.sort((a, b) => a[0] - b[0]);

  for (const [v, i] of dp) {
    answer.push(i);
  }

  return answer;
};

console.log(
  solution([
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
  ])
);
