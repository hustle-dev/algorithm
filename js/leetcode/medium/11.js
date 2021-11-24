/**
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let lt = 0;
  let rt = height.length - 1;
  let mw = 0;

  while (lt <= rt) {
    mw = Math.max(mw, Math.min(height[lt], height[rt]) * (rt - lt));
    if (height[lt] < height[rt]) lt++;
    else rt--;
  }

  return mw;
};
