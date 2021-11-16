// indexTree

const solution = (nums, order) => {
  const answer = [];
  const N = nums.length;
  const arr = Array(100).fill(0);
  let s = 1;
  while (s < N) {
    s = s * 2;
  }

  for (let i = 0; i < N; i++) {
    arr[s + i] = nums[i];
  }

  for (let i = s - 1; i > 0; i--) {
    arr[i] = arr[i * 2] + arr[i * 2 + 1];
  }

  const update = (idx, val) => {
    while (idx > 0) {
      arr[idx] += val;
      idx = Math.floor(idx / 2);
    }
  };

  const get = (s, e) => {
    let result = 0;
    while (s <= e) {
      if (s % 2 === 1) result += arr[s];
      if (e % 2 === 0) result += arr[e];
      s = Math.floor((s + 1) / 2);
      e = Math.floor((e - 1) / 2);
    }

    return result;
  };

  for (const [a, b, c] of order) {
    if (a === 1) {
      update(b + s - 1, c - arr[b + s - 1]);
    } else {
      answer.push(get(b + s - 1, c + s - 1));
    }
  }

  return answer;
};

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3, 6],
      [2, 2, 5],
      [1, 5, 2],
      [2, 3, 5],
    ]
  )
);
