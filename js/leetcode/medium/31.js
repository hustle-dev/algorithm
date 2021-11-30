/**
 * Next Permutation
 * https://leetcode.com/problems/next-permutation/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let k = -1;
  let l;

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  function reverse(idx) {
    let start = idx,
      end = nums.length - 1;

    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      k = i;
      break;
    }
  }

  if (k < 0) {
    nums.reverse();
    return;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[k] < nums[i]) {
      l = i;
      break;
    }
  }

  swap(k, l);
  reverse(k + 1);
};

console.log([1, 3, 2]);
