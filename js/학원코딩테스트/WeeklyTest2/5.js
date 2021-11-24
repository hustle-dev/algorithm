function solution(nums) {
  let answer = 0;
  let n = nums.length;
  dy = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      dy[i][j] = 2;
      let pre = nums[i] * 2 - nums[j];
      let pos = 0;
      for (; pos < i; pos++) {
        if (nums[pos] === pre) break;
      }
      if (pre === nums[pos]) dy[i][j] = dy[pos][i] + 1;
      answer = Math.max(answer, dy[i][j]);
    }
  }
  return answer;
}
console.log(solution([1, 2, 3, 5, 7, 8, 9]));
