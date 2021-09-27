// function solution(nums, d, k) {
//   let answer = 0;

//   console.log(nums);
//   console.log(d);
//   console.log(k);
//   return answer;
// }

// console.log(solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3));

function solution(n, edges) {
  let answer = 0;
  const ch = Array.from({ length: n + 1 }, () => 0);
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const temp = [];

  for (const [a, b] of edges) {
    graph[a][b] = 1;
  }

  function DFS(L) {
    if (L === n) {
      console.log(temp);
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0 && graph[L][i] === 1) {
        }
      }
    }
  }

  ch[1] = 1;
  temp.push(1);
  DFS(1);

  return answer;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
