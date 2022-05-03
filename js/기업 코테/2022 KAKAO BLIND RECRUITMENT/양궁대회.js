const solution = (n, info) => {
  let maxDiff = 0;
  let ans = new Array(11).fill(0);

  const DFS = (apeach, ryan, idx, count, board) => {
    if (n < count) return;

    if (idx > 10) {
      const diff = ryan - apeach;

      if (maxDiff < diff) {
        maxDiff = diff;
        ans = board;
        ans[10] = n - count;
      }

      return;
    }

    if (n > count) {
      const newBoard = [...board];
      newBoard[10 - idx] = info[10 - idx] + 1;
      DFS(apeach, ryan + idx, idx + 1, count + (info[10 - idx] + 1), newBoard);
    }

    if (info[10 - idx] > 0) {
      DFS(apeach + idx, ryan, idx + 1, count, board);
    } else {
      DFS(apeach, ryan, idx + 1, count, board);
    }
  };

  DFS(0, 0, 0, 0, ans);

  return maxDiff === 0 ? [-1] : ans;
};
