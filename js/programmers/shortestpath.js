function solution(maps) {
  let answer = 0;
  const n = maps.length;
  const m = maps[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  function BFS() {
    let queue = [[0, 0]];

    while (queue.length) {
      let cur = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = cur[0] + dx[i];
        const ny = cur[1] + dy[i];
        if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
          maps[nx][ny] = maps[cur[0]][cur[1]] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  BFS();

  if (maps[n - 1][m - 1] === 1) {
    return -1;
  }
  answer = maps[n - 1][m - 1];
  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
