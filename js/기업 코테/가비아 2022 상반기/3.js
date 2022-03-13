const solution = (arr, k, t) => {
  let ans = 0;

  const DFS = (L, s, sum, count) => {
    if (sum > t) return;
    if (L === arr.length) {
      if (count >= k) ans++;
    } else {
      for (let i = s; i < arr.length; i++) {
        DFS(L + 1, i + 1, sum + arr[i], count + 1);
        DFS(L + 1, i + 1, sum, count);
      }
    }
  };

  DFS(0, 0, 0, 0);

  return ans;
};

console.log(solution([2, 5, 3, 8, 1], 3, 11));
