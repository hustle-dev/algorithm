const solution = (sentences, n) => {
  let answer = 0;
  // 단어 담아둘 객체
  const word = {};
  // 점수 객체
  const grade = {};

  for (let i = 0; i < sentences.length; i++) {
    word[i] = new Set(sentences[i].replace(/\s/g, '').toLowerCase().split(''));
    grade[i] = sentences[i].length;

    // 대문자 매치되는거 있는 경우
    const upper = sentences[i].match(/[A-Z]/g);
    if (upper) {
      word[i].add('shift');
      grade[i] += upper.length;
    }
  }

  // DFS를 돌면서 최대 점수 찾기
  const DFS = (L, score, set) => {
    if (L === sentences.length) {
      if (set.size <= n) answer = Math.max(answer, score);
    } else {
      DFS(L + 1, score + grade[L], new Set([...set, ...word[L]]));
      DFS(L + 1, score, set);
    }
  };

  DFS(0, 0, new Set());

  return answer;
};

console.log(solution(['line in line', 'LINE', 'in lion'], 5));
console.log(solution(['ABcD', 'bdbc', 'a', 'Line neWs'], 7));
