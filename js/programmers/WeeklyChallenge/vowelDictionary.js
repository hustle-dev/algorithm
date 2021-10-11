const solution = word => {
  const words = ['A', 'E', 'I', 'O', 'U'];
  const temp = [];
  let num = 0;
  let answer = 0;
  let flag = false;

  function DFS(L) {
    if (flag) return;
    num++;

    if (word === temp.join('')) {
      answer = num - 1;
      flag = true;
    }
    if (L === 5) {
      return;
    } else {
      for (let i = 0; i < words.length; i++) {
        temp.push(words[i]);
        DFS(L + 1);
        temp.pop();
      }
    }
  }

  DFS(0);

  return answer;
};

console.log(solution('EIO'));
