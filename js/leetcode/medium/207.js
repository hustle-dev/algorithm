/**
 * Course Schedule
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => Array());
  const indegree = new Array(numCourses).fill(0);
  const queue = [];
  const order = [];

  for (const [a, b] of prerequisites) {
    indegree[a]++;
    graph[b].push(a);
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    for (const e of graph[v]) {
      indegree[e]--;
      if (indegree[e] === 0) queue.push(e);
    }
    order.push(v);
  }

  return numCourses === order.length;
};
