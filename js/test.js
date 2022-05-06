const solution = places => {
  const ans = [];

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  places.forEach(place => {
    const graph = Array.from({ length: 5 }, () => Array(5).fill(0));
    let flag = false;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        graph[i][j] = place[i][j];
      }
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (graph[i][j] !== 'P') continue;

        for (let k = 0; k < 4; k++) {
          const ni = i + dy[k];
          const nj = j + dx[k];

          if (ni >= 0 && nj >= 0 && ni < 5 && nj < 5) {
            if (graph[ni][nj] === 'P') {
              flag = true;
              break;
            }
          }
        }
      }
      if (flag) break;
    }

    if (flag) {
      ans.push(0);
    } else {
      ans.push(1);
    }
  });

  return ans;
};

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);
