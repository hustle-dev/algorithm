const solution = (enter, leave) => {
  let answer;
  const graph = Array.from({ length: enter.length + 1 }, () => Array());
  const ch = Array(enter.length + 1).fill(0);
  console.log(ch);

  for (let i = 0; i < leave.length; i++) {
    const elIndex = enter.indexOf(leave[i]);
    ch[leave[i]] = 1;
    if (elIndex === 0) {
      enter.shift();
      continue;
    } else {
      for (let j = 0; j <= elIndex; j++) {
        for (let k = 0; k <= elIndex; k++) {
          if (ch[enter[j]] === 0 && enter[j] !== enter[k]) {
            graph[enter[j]].push(enter[k]);
          }
        }
      }
    }
  }

  console.log(graph);

  return answer;
};

console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
