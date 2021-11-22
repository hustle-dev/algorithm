/**
 * Path With Minimum Effort
 * https://leetcode.com/problems/path-with-minimum-effort/
 * @param {number[][]} heights
 * @return {number}
 */
function solution(heights) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  const N = heights.length;
  const M = heights[0].length;

  let dist = Array.from({ length: N }, () => Array(M).fill(Number.MAX_SAFE_INTEGER));

  function BFS() {
    let queue = [[0, 0]];
    while (queue.length) {
      let [curX, curY] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = curX + dy[i];
        let ny = curY + dx[i];
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

        // 이 부분이 중요한데, 다른 위치로 이동할 때, 가면서 든 노력을 유지하기 위해 지금까지 든 노력의 최대를 유지시켜주어야 한다.
        let effort = Math.max(Math.abs(heights[nx][ny] - heights[curX][curY]), dist[curX][curY]);
        if (dist[nx][ny] > effort) {
          dist[nx][ny] = effort;
          queue.push([nx, ny]);
        }
      }
    }
  }

  dist[0][0] = 0;
  BFS();

  return dist[N - 1][M - 1];
}

console.log(solution([1, 10, 6, 7, 9, 10, 4, 9]));
