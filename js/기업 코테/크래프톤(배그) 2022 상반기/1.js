function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let ans = 0;
  const N = (A * B).toString(2);
  for (const x of N) {
    if (x === '1') ans++;
  }

  return ans;
}
