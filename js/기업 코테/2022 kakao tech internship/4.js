const solution = (n, paths, gates, summits) => {
  paths.sort((a, b) => (a[2] === b[2] ? a[0] - b[0] : a[2] - b[2]));

  const gateSwitch = {};
  const summitsSwitch = {};

  let total_min_cost = 0;

  console.log(paths);

  for (const gate of gates) {
    gateSwitch[gate] = 0;
  }

  for (const summit of summits) {
    summitsSwitch[summit] = 0;
  }

  const answer = [];
  let edge_min_cost = 0;

  for (const gate of gates) {
    gateSwitch[gate] = 1;
    for (const summit of summits) {
      summitsSwitch[summit] = 1;
      const unf = Array.from({ length: n + 1 }, (_, i) => i);
      const Find = v => {
        if (v === unf[v]) return v;
        else {
          unf[v] = Find(unf[v]);
          return unf[v];
        }
      };
      let summit_min_cost = 0;
      const ch = {};
      ch[gate] = 0;
      ch[summit] = 0;
      for (const [a, b, c] of paths) {
        if (summitsSwitch[a] === 0 || summitsSwitch[b] === 0) continue;
        if (gateSwitch[a] === 0 || gateSwitch[b] === 0) continue;
        if (ch[gate] === 1 && ch[summit] === 1) break;

        let fa = Find(a);
        let fb = Find(b);

        if (fa !== fb) {
          unf[fa] = fb;
          total_min_cost += c;
          console.log(a, b);

          ch[a] = 1;
          ch[b] = 1;

          if (summit_min_cost < c) {
            summit_min_cost = c;
          }
        }
      }
      console.log(summit_min_cost);
      summitsSwitch[summit] = 0;
    }
    gateSwitch[gate] = 0;
  }

  // answer.push(edge_min_cost);
  // return answer;
};

// console.log(
//   solution(
//     6,
//     [
//       [1, 2, 3],
//       [2, 3, 5],
//       [2, 4, 2],
//       [2, 5, 4],
//       [3, 4, 4],
//       [4, 5, 3],
//       [4, 6, 1],
//       [5, 6, 1],
//     ],
//     [1, 3],
//     [5]
//   )
// );
console.log(
  solution(
    7,
    [
      [1, 4, 4],
      [1, 6, 1],
      [1, 7, 3],
      [2, 5, 2],
      [3, 7, 4],
      [5, 6, 6],
    ],
    [1],
    [2, 3, 4]
  )
);
// console.log(
//   solution(
//     7,
//     [
//       [1, 2, 5],
//       [1, 4, 1],
//       [2, 3, 1],
//       [2, 6, 7],
//       [4, 5, 1],
//       [5, 6, 1],
//       [6, 7, 1],
//     ],
//     [3, 7],
//     [1, 5]
//   )
// );
