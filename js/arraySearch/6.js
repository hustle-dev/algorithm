function solution(nums) {
  const answer = [];
  const newArray = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === 1) {
        count += 1;
      }
    }
    newArray.push([i, count]);
    count = 0;
  }

  newArray
    .sort((a, b) => a[1] - b[1])
    .forEach(x => {
      answer.push(x[0]);
    });

  return answer;
}

console.log(
  solution([
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
  ])
);
