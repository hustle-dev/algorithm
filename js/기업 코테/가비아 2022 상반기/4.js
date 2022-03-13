const solution = (estimates, k) => {
  let ans = 0;
  let sum = 0;
  let lt = 0;

  for (let i = 0; i < k - 1; i++) {
    sum += estimates[i];
  }

  for (let i = k - 1; i < estimates.length; i++) {
    sum += estimates[i];
    if (ans < sum) ans = sum;
    sum -= estimates[lt];
    lt++;
  }

  return ans;
};
