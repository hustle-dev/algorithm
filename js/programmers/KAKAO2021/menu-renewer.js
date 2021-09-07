function solution(orders, course) {
  let answer = [];
  let sH = new Map();
  let tempArr = [];

  function DFS(L, s, m, word) {
    if (L === m) {
      let joinStr = tempArr.join('');
      sH.set(joinStr, sH.get(joinStr) + 1 || 1);
    } else {
      for (let i = s; i < word.length; i++) {
        tempArr.push(word[i]);
        DFS(L + 1, i + 1, m, word);
        tempArr.pop();
      }
    }
  }

  for (let i = 0; i < course.length; i++) {
    let totalArr = [];
    let temp = orders.filter(x => x.length >= course[i]);

    console.log(temp);
    sH.clear();

    for (let j = 0; j < temp.length; j++) {
      let word = temp[j].split('').sort();
      DFS(0, 0, course[i], word);
    }

    let max = Math.max(...sH.values());

    for (let [a, b] of sH) {
      if (max === b && b > 1) {
        answer.push(a);
      }
    }
  }

  return answer.sort();
}
