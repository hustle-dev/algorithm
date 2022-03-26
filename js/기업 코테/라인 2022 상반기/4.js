const solution = (arr, brr) => {
  let answer = 0;
  let last = arr.length - 1;
  let first = 0;

  while (first < last) {
    if (arr[first] !== brr[first]) {
      const diff = arr[first] - brr[first];

      arr[first] -= diff;
      arr[first + 1] += diff;
      answer += 1;
    }

    if (arr[last] !== brr[last]) {
      const diff = arr[last] - brr[last];

      arr[last] -= diff;
      arr[last - 1] += diff;
      answer += 1;
    }

    last -= 1;
    first += 1;
  }

  return answer;
};

console.log(solution([3, 7, 2, 4], [4, 5, 5, 2]));
console.log(solution([6, 2, 2, 6], [4, 4, 4, 4]));
