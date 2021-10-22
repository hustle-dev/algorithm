const isRightP = str => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0 && (str[i] === ')' || str[i] === ']' || str[i] === '}')) {
      return false;
    }

    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else {
      const popVal = stack.pop();
      if (str[i] === ')') {
        if (popVal !== '(') {
          return false;
        }
      } else if (str[i] === ']') {
        if (popVal !== '[') {
          return false;
        }
      } else {
        if (popVal !== '{') {
          return false;
        }
      }
    }
  }

  if (stack.length === 0) return true;
};

const solution = s => {
  let answer = 0;
  let changeStr = s.split('');

  for (let i = 0; i < s.length; i++) {
    if (isRightP(changeStr.join(''))) {
      answer++;
    }
    const shiftItem = changeStr.shift();
    changeStr.push(shiftItem);
  }

  return answer;
};

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('"}}}"'));
// console.log(solution('({[}])'));
