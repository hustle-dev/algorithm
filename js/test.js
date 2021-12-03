/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  let cnt = 0;

  const UP = 1;
  const DOWN = 0;

  let state = DOWN;
  let i = 0;
  for (i; i < nums.length; i++) {
    if (state) {
      if (nums[i] > nums[i + 1]) {
        break;
      } else {
        continue;
      }
    } else {
      if (nums[i] < nums[i + 1]) {
        state = UP;
        continue;
      } else {
        cnt++;
      }
    }
  }
  let j = nums.length - 1;
  state = UP;
  for (j; j >= 0; j--) {
    if (state) {
      if (nums[j] > nums[j - 1]) {
      } else {
        continue;
      }
    } else {
      if (nums[j] < nums[j - 1]) {
        state = DOWN;
        continue;
      } else {
        cnt++;
      }
    }
  }
  console.log(cnt);
  console.log(i);
};

// console.log(minimumMountainRemovals([1, 3, 1]));
console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]));
// console.log(minimumMountainRemovals([4, 3, 2, 1, 1, 2, 3, 1]));
// console.log(minimumMountainRemovals([1, 2, 3, 4, 4, 3, 2, 1]));
