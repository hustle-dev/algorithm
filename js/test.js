/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const answer = [];
  let visited = {};

  function DFS(node) {
    if (visited[node] === true) {
      return false;
    }

    if (visited[node] === 'safe') {
      return true;
    }

    visited[node] = true;
    for (let i = 0; i < graph[node].length; i++) {
      if (!DFS(graph[node][i])) {
        return false;
      }
    }

    visited[node] = 'safe';
    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    if (DFS(i)) {
      answer.push(i);
    }
  }

  return answer;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
