const solution = gold_prices => {
  let buy = Number.MAX_SAFE_INTEGER;
  let free = 0;
  let last = 0;
  let now = 0;
  for (const x of gold_prices) {
    now = Math.max(last, x - buy);
    buy = Math.min(buy, x - free);
    free = last;
    last = now;
  }
  return now;
};

console.log(solution([2, 5, 1, 3, 4]));
console.log(solution([7, 2, 5, 6, 1, 4, 2, 8]));
