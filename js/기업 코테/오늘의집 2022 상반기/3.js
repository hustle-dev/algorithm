const solution = (n, m, room, bath) => {
  const arr = new Array(n).fill(null).map(() => new Array(m).fill(0));

  const factorial = n => {
    if (n === 1) return n;

    return n * factorial(n - 1);
  };

  const duplicate = factorial(room) * factorial(bath);

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let ans = 0;

  const isValid = (arr, sum) => {
    const chk = new Array(n).fill(null).map(() => new Array(m).fill(0));
    let isFound = false;
    let maxArea = 0;
    const q = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        maxArea = Math.max(maxArea, arr[i][j]);

        if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
          if (arr[i][j] === 0 && !isFound) {
            q.push([i, j]);
            chk[i][j] = 1;
            isFound = true;
          }
        }
      }
    }

    let visited = new Set();
    let count = 1;
    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (arr[nx][ny]) visited.add(arr[nx][ny]);
          if (chk[nx][ny]) continue;
          if (arr[nx][ny]) continue;
          chk[nx][ny] = 1;
          q.push([nx, ny]);
          count += 1;
        }
      }
    }

    if (n * m - sum === count && visited.size === maxArea) {
      ans += 1;
    }
  };

  const dfsBath = (L, s, numb) => {
    if (L === bath) {
      isValid(arr, room * 4 + bath * 2);
    } else {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (i + 1 < n && !arr[i][j] && !arr[i + 1][j]) {
            arr[i][j] = numb;
            arr[i + 1][j] = numb;
            dfsBath(L + 1, [i, j], numb + 1);
            arr[i][j] = 0;
            arr[i + 1][j] = 0;
          }

          if (j + 1 < m && !arr[i][j] && !arr[i][j + 1]) {
            arr[i][j] = numb;
            arr[i][j + 1] = numb;
            dfsBath(L + 1, [i, j], numb + 1);
            arr[i][j] = 0;
            arr[i][j + 1] = 0;
          }
        }
      }
    }
  };

  const dfsRoom = (L, s, numb) => {
    if (L === room) {
      dfsBath(0, [0, 0], numb);
    } else {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (i + 1 >= n || j + 1 >= m) continue;
          if (!arr[i][j] && !arr[i + 1][j] && !arr[i][j + 1] && !arr[i + 1][j + 1]) {
            arr[i][j] = numb;
            arr[i + 1][j] = numb;
            arr[i][j + 1] = numb;
            arr[i + 1][j + 1] = numb;
            dfsRoom(L + 1, [i, j], numb + 1);
            arr[i][j] = 0;
            arr[i + 1][j] = 0;
            arr[i][j + 1] = 0;
            arr[i + 1][j + 1] = 0;
          }
        }
      }
    }
  };

  dfsRoom(0, [0, 0], 1);

  return ans / duplicate;
};

console.log(solution(4, 5, 3, 1)); // 20
console.log(solution(2, 3, 1, 1)); // 0
console.log(solution(3, 4, 2, 1)); // 0
console.log(solution(2, 4, 1, 1)); // 6
