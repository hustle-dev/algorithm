function solution(s, t) {
  let answer = 0;
  const sH = new Map();
  let lt = 0;

  for (let i = 0; i < t.length - 1; i++) {
    sH.set(s[i], sH.get(s[i]) + 1 || 1);
  }

  for (let i = t.length - 1; i < s.length; i++) {
    sH.set(s[i], sH.get(s[i]) + 1 || 1);
    if (Array.from(sH.keys()).filter(x => t.includes(x)).length === 3) answer += 1;
    if (sH.get(s[lt]) === 1) {
      sH.delete(s[lt]);
    } else {
      sH.set(s[lt], sH.get(s[lt]) - 1);
    }
    lt += 1;
  }

  return answer;
}

console.log(solution('bacaAacba', 'abc'));
