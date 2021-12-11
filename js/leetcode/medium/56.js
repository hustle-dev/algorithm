/**
 * Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const answer = [];

  for (let i = 0; i < intervals.length; i++) {
    let [curStart, curEnd] = intervals[i];
    while (i + 1 < intervals.length && curEnd >= intervals[i + 1][0]) {
      i++;
      let [ns, ne] = intervals[i];
      if (curEnd < ne) curEnd = ne;
    }
    answer.push([curStart, curEnd]);
  }

  return answer;
};
