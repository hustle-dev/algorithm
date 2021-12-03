/**
 * Longest Mountain in Array
 * https://leetcode.com/problems/longest-mountain-in-array/
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  const up = Array(arr.length).fill(0);
  const down = Array(arr.length).fill(0);
  const lengthArr = Array(arr.length).fill(0);

  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      up[i] = cnt;
      cnt++;
    } else {
      up[i] = cnt;
      cnt = 1;
    }
  }
  cnt = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      down[i] = cnt;
      cnt++;
    } else {
      down[i] = cnt;
      cnt = 1;
    }
  }
  if (Math.max(...down) === 1 || Math.max(...up) === 1) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (up[i] === 1 || down[i] === 1) {
      lengthArr[i] = -1;
      continue;
    }
    lengthArr[i] = up[i] + down[i] - 1;
  }
  const answer = Math.max(...lengthArr);
  return answer >= 3 ? answer : 0;
};
