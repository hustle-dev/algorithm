const solution = (number, k) => {
  let answer;
  const stack = [];

  stack.push(number[0]);

  let cnt = 0;
  for (let i = 1; i < number.length; i++) {
    while (stack.length && stack[stack.length - 1] < number[i] && cnt < k) {
      cnt++;
      stack.pop();
    }
    if (cnt === k) {
      while (i < number.length) {
        stack.push(number[i]);
        i++;
      }
      break;
    }
    stack.push(number[i]);
  }

  // 만약 k개 만큼 줄어들지 않았다면 stack에서 제거해주어야함!
  stack.splice(number.length - k, k);

  answer = stack.join('');
  return answer;
};

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
