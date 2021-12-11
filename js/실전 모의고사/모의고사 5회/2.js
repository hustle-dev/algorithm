const solution = s => {
  const answer = [];

  for (const str of s) {
    if (str === str.split('').reverse().join('')) {
      answer.push(0);
    } else {
      let lt = 0;
      let rt = str.length - 1;
      while (lt < rt) {
        if (!(str[lt] === str[rt])) {
          let substr1 = str.substring(lt, rt);
          let substr2 = str.substring(lt + 1, rt + 1);
          if (
            substr1 !== substr1.split('').reverse().join('') &&
            substr2 !== substr2.split('').reverse().join('')
          ) {
            answer.push(2);
            break;
          }

          answer.push(1);
          break;
        }
        lt++;
        rt--;
      }
    }
  }

  return answer;
};

console.log(solution(['abba', 'summuus', 'xabba', 'xabbay', 'comcom', 'comwwmoc', 'comwwtmoc']));
