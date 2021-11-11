const solution = (id_list, report, k) => {
  const result = [];
  const sH = new Map();
  const reportNum = new Map();
  const pauseUser = [];

  for (let x of id_list) {
    sH.set(x, '');
    reportNum.set(x, 0);
  }

  report.forEach(content => {
    const [reporter, reportee] = content.split(' ');
    sH.set(reporter, sH.get(reporter) + reportee + ' ');
  });

  for (let reportee of sH.values()) {
    for (let x of Array(...new Set([...reportee.split(' ')]))) {
      if (x) {
        reportNum.set(x, reportNum.get(x) + 1);
      }
    }
  }

  for (let x of reportNum.keys()) {
    if (reportNum.get(x) >= k) {
      pauseUser.push(x);
    }
  }

  let count = 0;
  for (let x of sH.values()) {
    for (let y of pauseUser) {
      if (Array(...new Set([...x.split(' ')])).includes(y)) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  }

  return result;
};

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
