// 효율성 문제 코드

const solution = (info, query) => {
  let answer = [];

  //   info.sort((a, b) => a.slice(-3) - b.slice(-3));

  query.forEach(condition => {
    const [lang, role, career, food, score] = condition.replace(/and ?/g, '').split(' ');
    let count = 0;

    info.forEach(infoContent => {
      const [lang2, role2, career2, food2, score2] = infoContent.split(' ');

      if (
        (lang === '-' || lang === lang2) &&
        (role === '-' || role === role2) &&
        (career === '-' || career === career2) &&
        (food === '-' || food === food2) &&
        Number(score2) >= Number(score)
      ) {
        count++;
      }
    });

    answer = [...answer, count];
  });

  return answer;
};

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
    ]
  )
);
