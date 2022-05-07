const solution = (queue1, queue2) => {
  const q1_total = queue1.reduce((acc, cur) => acc + cur, 0);
  const q2_total = queue2.reduce((acc, cur) => acc + cur, 0);

  const total = q1_total + q2_total;
  const half = total / 2;

  if (half !== Math.ceil(half)) return -1;

  const arr = queue1.concat(queue2);
  let flag = false;

  let sum = 0;
  let lt = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === half) {
      flag = true;
      break;
    }

    if (sum > half) {
      while (sum > half) {
        sum -= arr[lt];
        lt++;
      }

      if (sum === half) {
        flag = true;
        break;
      }
    }
  }

  if (!flag) return -1;

  let cnt = 0;
  let q1Sum = q1_total;
  let q2Sum = q2_total;
  let q1pt = 0;
  let q2pt = queue2.length;

  while (true) {
    if (q1Sum > q2Sum) {
      q1Sum -= arr[q1pt];
      q2Sum += arr[q1pt];
      q1pt += 1;
      cnt++;
    } else if (q1Sum < q2Sum) {
      q1Sum += arr[q2pt];
      q2Sum -= arr[q2pt];
      q2pt += 1;
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
};

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
