const solution = (number, k) => {
  let answer;
  const stack = [];

  stack.push(number[0]);

  let cnt = 0;
  for (let i = 1; i < number.length; i++) {
    if (cnt === k) {
      while (i < number.length) {
        stack.push(number[i]);
        i++;
      }
      break;
    }
    while (stack.length && Number(stack[stack.length - 1]) < Number(number[i])) {
      if (cnt === k) break;
      cnt++;
      stack.pop();
    }
    stack.push(number[i]);
  }

  answer = stack.join('');
  return answer;
};

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
