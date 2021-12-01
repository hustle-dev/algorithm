function solution(nums) {
  let answer = 0;
  let count = 1;
  const dp = Array.from({ length: nums.length }, () => 0);
  const dy = Array.from({ length: nums.length }, () => 0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      dp[i] = count;
      count++;
    } else {
      if (count !== 1) {
        dp[i] = count;
      } else {
        dp[i] = 1;
      }
      count = 1;
    }
  }

  count = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i - 1]) {
      dy[i] = count;
      count++;
    } else {
      if (count !== 1) {
        dy[i] = count;
      } else {
        dy[i] = 1;
      }
      count = 1;
    }
  }

  answer = Math.max(...dp, ...dy);

  return answer;
}

console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7]));

// function solution(nums) {
//   let answer = 0;
//   let up = 1;
//   let down = 1;
//   let maxup = 0;
//   let maxdown = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < nums[i + 1]) up++;
//     else {
//       maxup = Math.max(up, maxup);
//       up = 1;
//     }

//     if (nums[i] > nums[i + 1]) down++;
//     else {
//       maxdown = Math.max(down, maxdown);
//       down = 1;
//     }
//   }

//   answer = Math.max(maxup, maxdown);

//   return answer;
// }

// console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7]));
