function solution(nums) {
  let answer = new Set();
  let index = 0;
  let minValue = 9999;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] < minValue) {
        minValue = nums[i][j];
        index = j;
      }
    }
    for (let k = 0; k < nums.length; k++) {
      if (nums[k][index] >= minValue) {
        continue;
      } else {
        minValue = nums[k][index];
      }
    }
    answer.add(minValue);
    minValue = 9999;
  }

  answer = Array.from(answer);

  return answer.sort((a, b) => a - b);
}

console.log(
  solution([
    [4, 6, 22, 1],
    [9, 3, 10, 12],
    [30, 7, 20, 2],
    [15, 8, 5, 13],
  ])
);
