/**
 * @title Combination Sum
 * @link https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const N = candidates.length;
  const answer = [];
  const checkArr = [];
  const temp = [];

  function DFS(sum) {
    if (sum > target) return;
    if (sum === target) {
      const newTemp = [...temp];
      const tempString = newTemp.sort((a, b) => a - b).join('');
      if (!checkArr.includes(tempString)) {
        checkArr.push(tempString);
        answer.push([...temp]);
      }
    } else {
      for (let i = 0; i < N; i++) {
        temp.push(candidates[i]);
        DFS(sum + candidates[i]);
        temp.pop();
      }
    }
  }

  DFS(0);
  return answer;
};
