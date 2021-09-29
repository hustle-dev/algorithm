function solution(times, r) {
  let answer = 0;
  times.sort((a, b) => a[1] - b[1]);
  const dp = Array.from({ length: times.length }, () => 0);

  for (let i = 0; i < times.length; i++) {
    dp[i] = times[i][2];
    for (let j = i - 1; j >= 0; j--) {
      if (times[i][0] >= times[j][1] + r && dp[j] + times[i][2] > dp[i]) {
        dp[i] = dp[j] + times[i][2];
      }
    }
    answer = Math.max(answer, dp[i]);
  }

  return answer;
}

console.log(
  solution(
    [
      [3, 5, 20],
      [4, 7, 16],
      [1, 2, 5],
      [11, 13, 7],
      [9, 10, 6],
    ],
    2
  )
);
