const solution = (abilities, k) => {
  // 내림차순 정렬해서 큰거 부터 가져가기
  abilities.sort((a, b) => b - a);
  let sum = 0;
  const N = abilities.length;
  const stage = Math.floor(N / 2);
  const arr = [];

  // 자신의 턴에만 가져가는거
  for (let i = 0; i < N; i++) {
    if ((i + 1) % 2 === 0) {
      sum += abilities[i];
    }
  }

  // 우선권
  for (let i = 0; i <= stage; i++) {
    const [temp, temp2] = [2 * i, 2 * i + 1];
    const value = (abilities[temp] || 0) - (abilities[temp2] || 0);
    arr.push(value);
  }

  arr.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    sum += arr[i] || 0;
  }

  return sum;
};

console.log(solution([2, 8, 3, 6, 1, 9, 1, 9], 2));
console.log(solution([7, 6, 8, 9, 10], 1));
