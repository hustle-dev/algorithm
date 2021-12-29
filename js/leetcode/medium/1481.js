/**
 * Least Number of Unique Integers after K Removals
 * https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const m = new Map();
  let cnt = 0;

  for (const n of arr) {
    m.set(n, m.get(n) + 1 || 1);
  }
  if (k === 0) return m.size;

  const newArr = [...m.entries()];
  newArr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < newArr.length; i++) {
    while (newArr[i][1] > 0) {
      newArr[i][1] -= 1;
      k -= 1;
      if (k === 0) break;
    }
    if (newArr[i][1] === 0) cnt++;

    if (k === 0) break;
  }

  return newArr.length - cnt;
};
