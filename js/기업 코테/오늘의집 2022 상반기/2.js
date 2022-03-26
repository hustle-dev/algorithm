function solution(beds, tables, cost) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (const [bedX, bedY, bedCost] of beds) {
    for (const [tableX, tableY, tableCost] of tables) {
      const width1 = Math.max(bedX, tableX) * (bedY + tableY);
      const width2 = Math.max(bedX, tableY) * (bedY + tableX);
      const width3 = Math.max(bedY, tableX) * (bedX + tableY);
      const width4 = Math.max(bedY, tableY) * (bedX + tableX);

      const result = Math.min(width1, width2, width3, width4);
      answer = Math.min(answer, bedCost + tableCost + result * cost);
    }
  }

  return answer;
}

console.log(solution([[4, 1, 200000]], [[2, 3, 100000]], 10000));
console.log(
  solution(
    [
      [2, 3, 40],
      [2, 5, 20],
    ],
    [[1, 1, 30]],
    10000
  )
);
console.log(
  solution(
    [
      [2, 3, 40000],
      [2, 5, 20000],
    ],
    [[1, 1, 30000]],
    10
  )
);
