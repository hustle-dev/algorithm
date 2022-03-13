const isTrue = (g, i, j, nexti, nextj) => {
  let rowse = new Set();
  for (let row = i; row <= nexti; row++) {
    let rowSum = 0;
    for (let col = j; col <= nextj; col++) {
      rowSum += g[row][col];
    }
    rowse.add(rowSum);
    if (rowse.size > 1) return false;
  }
  let colse = new Set();
  for (let col = j; col <= nextj; col++) {
    let colSum = 0;
    for (let row = i; row <= nexti; row++) {
      colSum += g[row][col];
    }
    colse.add(colSum);
    if (colse.size > 1) return false;
  }
  if (rowse.values().next().value !== colse.values().next().value) return false;
  let [x, y] = [i, j];
  let d1sum = g[x][y];
  while (x + 1 <= nexti && y + 1 <= nextj) {
    x++;
    y++;
    d1sum += g[x][y];
  }
  x = nexti;
  y = j;
  let d2sum = g[x][y];
  while (x - 1 >= i && y + 1 <= nextj) {
    x--;
    y++;
    d2sum += g[x][y];
  }
  if (rowse.values().next().value !== d1sum) return false;
  if (d1sum !== d2sum) return false;
  return true;
};

const solution = g => {
  let n = g.length;
  let m = g[0].length;
  for (let edge = Math.min(n, m); edge > 1; edge--) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        let ni = i + edge - 1;
        let nj = j + edge - 1;
        if (ni >= n || nj >= m) continue;
        if (isTrue(g, i, j, ni, nj)) return edge;
      }
    }
  }
  return 1;
};
