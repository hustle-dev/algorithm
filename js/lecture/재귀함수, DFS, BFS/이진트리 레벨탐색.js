const solution = () => {
  let answer = '';

  const BFS = () => {
    const queue = [];
    queue.push(1);
    while (queue.length) {
      const v = queue.shift();
      answer += v + ' ';
      for (const nv of [v * 2, v * 2 + 1]) {
        if (nv > 7) continue;
        queue.push(nv);
      }
    }
  };
  BFS();
  return answer;
};

console.log(solution());
