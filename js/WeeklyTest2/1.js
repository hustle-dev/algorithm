function solution(s) {
  let flag = false;
  s.sort((a, b) => a.length - b.length);
  let index = s[0].length;

  for (let i = 0; i < s[0].length; i++) {
    let compWord = s[0][i];
    for (let j = 0; j < s.length; j++) {
      if (s[j][i] !== compWord) {
        flag = true;
        break;
      }
    }
    if (flag) {
      index = i;
      break;
    }
  }

  if (flag) {
    return s[0].slice(0, index);
  }
  return s[0].slice(0, index);
}

console.log(solution(['long', 'longtime', 'longest']));
