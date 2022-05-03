const solution = (n, info) => {
  let max = 0;
  let ans = new Array(11).fill(0);

  const DFS = (apeach, ryan, idx, count, board) => {
    if (n < count) return;

    if (idx > 10) {
      const diff = ryan - apeach;

      if (diff > max) {
        max = diff;
        ans = board;
        ans[10] = n - count;
      }

      return;
    }

    if (n > count) {
      let candidate = [...board];
      candidate[10 - idx] = info[10 - idx] + 1;
      DFS(apeach, ryan + idx, idx + 1, count + info[10 - idx] + 1, candidate);
    }

    if (info[10 - idx] > 0) {
      DFS(apeach + idx, ryan, idx + 1, count, board);
    } else {
      DFS(apeach, ryan, idx + 1, count, board);
    }
  };

  DFS(0, 0, 0, 0, ans);
  return max === 0 ? [-1] : ans;
};

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
