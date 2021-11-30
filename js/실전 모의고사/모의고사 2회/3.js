const solution = (w, h, t, s, points) => {
  let answer = 0;
  const x = [];
  const y = [];

  for (let [a, b] of points) {
    x.push(a);
    y.push(b);
  }

  for (let i = 0; i < t; i++) {
    for (let j = 0; j < t; j++) {
      let cnt = 0;
      for (let k = 0; k < t; k++) {
        if (x[i] <= x[k] && x[k] <= x[i] + s) {
          if (y[j] <= y[k] && y[k] <= y[j] + s) {
            cnt++;
          }
        }
      }
      answer = Math.max(answer, cnt);
    }
  }
  return answer;
};

console.log(
  solution(10, 9, 8, 3, [
    [3, 4],
    [6, 3],
    [5, 7],
    [6, 6],
    [9, 5],
    [6, 9],
    [7, 8],
    [8, 9],
  ])
);
