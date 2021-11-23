/**
 * @title Combination Sum II
 * @link https://leetcode.com/problems/combination-sum-ii/submissions/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const answer = [];

  function DFS(sum, s, temp) {
    if (sum === target) {
      answer.push([...temp]);
      return;
    } else {
      for (let i = s; i < candidates.length; i++) {
        if (i !== s && candidates[i] === candidates[i - 1]) continue;
        if (sum > target) return;
        temp.push(candidates[i]);
        DFS(sum + candidates[i], i + 1, temp);
        temp.pop();
      }
    }
  }
  DFS(0, 0, []);

  return answer;
};
