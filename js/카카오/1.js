const solution = (s, keypad) => {
  const keyArr = Array.from({ length: 3 }, () => Array(3).fill(0));
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, -1, -1, -1, 0, 1, 1, 1];
  let answer = 0;
  let firstStart = [];
  let nextStart = [];
  let isFirst = true;

  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (keypad[index] === s[0]) firstStart.push([i, j]);
      keyArr[i][j] = keypad[index];
      index++;
    }
  }

  function BFS() {
    for (let k = 1; k < s.length; k++) {
      if (s[k] === s[k - 1]) continue;
      let queue = [];
      if (isFirst) {
        queue = firstStart;
        isFirst = false;
      } else {
        queue = nextStart;
      }
      const target = s[k];
      const dist = Array(10).fill(-1);
      dist[+s[k - 1]] = 0;
      let flag = false;
      let L = 1;
      while (queue.length) {
        const len = queue.length;
        let flag2 = false;
        for (let i = 0; i < len; i++) {
          const [x, y] = queue.shift();
          for (let j = 0; j < 8; j++) {
            const nx = x + dy[j];
            const ny = y + dx[j];

            if (nx >= 0 && ny >= 0 && nx < 3 && ny < 3 && dist[keyArr[nx][ny]] === -1) {
              if (keyArr[nx][ny] === target) {
                answer += L;
                nextStart = [[nx, ny]];
                flag = true;
                break;
              }
              dist[keyArr[nx][ny]] = L;
              queue.push([nx, ny]);
            }
          }
          if (flag) {
            flag2 = true;
            break;
          }
        }
        if (flag2) break;
        L++;
      }
    }
  }

  BFS();

  return answer;
};

console.log(solution('523817', '371648295'));
console.log(solution('3999', '735194826'));
