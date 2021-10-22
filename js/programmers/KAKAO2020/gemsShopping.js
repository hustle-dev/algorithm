const solution = gems => {
  const kindOfGems = new Set(gems);
  let answer = [];
  let lt = 0;
  let rt = 0;
  let len = Number.MAX_SAFE_INTEGER;

  const nH = new Map();

  for (rt; rt < gems.length; rt++) {
    nH.set(gems[rt], nH.get(gems[rt]) + 1 || 1);

    if (kindOfGems.size === nH.size) {
      for (lt; lt < gems.length; lt++) {
        nH.set(gems[lt], nH.get(gems[lt]) - 1 || 0);

        if (nH.get(gems[lt]) === 0) {
          nH.set(gems[lt], 1);
          if (len > rt - lt) {
            len = rt - lt;
            answer = [lt + 1, rt + 1];
          }
          break;
        }
      }
    }
  }

  return answer;
};

// 전체 다 세주고, 그 중에서 짧은거 해야함

console.log(
  solution([
    'DIA',
    'RUBY',
    'RUBY',
    'DIA',
    'DIA',
    'EMERALD',
    'SAPPHIRE',
    'DIA',
    'EMERALD',
    'SAPPHIRE',
    'RUBY',
  ])
);
console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC']));
console.log(solution(['XYZ', 'XYZ', 'XYZ']));
console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB']));
