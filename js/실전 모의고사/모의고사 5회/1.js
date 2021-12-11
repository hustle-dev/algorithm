const solution = arr => {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j >= 0; j--) {
      if (min > arr[j]) {
        min = arr[j];
      }
      answer += min;
    }
  }

  return answer;
};

console.log(solution([3, 1, 2, 4]));
