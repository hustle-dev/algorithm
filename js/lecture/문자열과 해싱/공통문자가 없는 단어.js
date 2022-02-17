const solution = words => {
  let answer = 0;

  for (let i = 0; i < words.length; i++) {
    const curWordArr = words[i].split('');
    for (let j = i + 1; j < words.length; j++) {
      let flag = true;
      for (let k = 0; k < curWordArr.length; k++) {
        if (words[j].includes(curWordArr[k])) {
          flag = false;
          break;
        } else {
          continue;
        }
      }
      if (flag) {
        answer = Math.max(answer, curWordArr.length * words[j].length);
      }
    }
  }
  return answer;
};

console.log(solution(['skudy', 'kstue', 'time', 'back', 'good']));
console.log(solution(['kk', 'k', 'kkk', 'kkkkk', 'kkkk']));
