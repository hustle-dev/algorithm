/**
 * K-diff Pairs in an Array
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    let ans = 0;
    const m = new Map();
    for(const n of nums){
      m.set(n, m.get(n) + 1 || 1)
    }
    for(const [key, val] of m.entries()) {
      if(k === 0) {
        if(val > 1) ans++;
      } else {
        if(m.has(key + k)) ans++;
      }
    }
    return ans;
  };