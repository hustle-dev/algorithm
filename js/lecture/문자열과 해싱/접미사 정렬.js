const solution = s => {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    answer.push(s.slice(i));
  }

  return answer.sort();
};

console.log(solution('kseaedu'));
