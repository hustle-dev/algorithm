const solution = gold_prices => {
  let buy = Number.MIN_SAFE_INTEGER;
  let sell = 0;
  let rest = 0;
  for (const x of gold_prices) {
    let nextBuy = Math.max(buy, rest - x);
    let nextSell = buy + x;
    let nextRest = Math.max(rest, sell);
    buy = nextBuy;
    sell = nextSell;
    rest = nextRest;
  }

  return Math.max(sell, rest);
};

console.log(solution([2, 5, 1, 3, 4]));
console.log(solution([7, 2, 5, 6, 1, 4, 2, 8]));

// const solution = gold_prices => {
//   let buy = -gold_prices[0];
//   let rest = 0;
//   let sell = 0;
//   for (const x of gold_prices) {
//     buy = Math.max(buy, rest - x);
//     rest = Math.max(sell, rest);
//     sell = Math.max(sell, buy + x);
//   }

//   return sell;
// };

// console.log(solution([2, 5, 1, 3, 4]));
// console.log(solution([7, 2, 5, 6, 1, 4, 2, 8]));

// const solution = gold_prices => {
//   let buy = Number.MAX_SAFE_INTEGER;
//   let free = 0;
//   let last = 0;
//   let now = 0;
//   for (const x of gold_prices) {
//     now = Math.max(last, x - buy);
//     buy = Math.min(buy, x - free);
//     free = last;
//     last = now;
//   }
//   return now;
// };

// console.log(solution([2, 5, 1, 3, 4]));
// console.log(solution([7, 2, 5, 6, 1, 4, 2, 8]));
