const solution = (id_list, report, k) => {
  const reportResult = {};
  const reportList = {};
  const stoppedUser = [];
  const answer = [];

  for (const name of id_list) {
    reportResult[name] = 0;
    reportList[name] = [];
  }

  report.forEach(log => {
    const [reporter, reportee] = log.split(' ');

    if (!reportList[reporter].includes(reportee)) {
      reportResult[reportee] += 1;
      reportList[reporter].push(reportee);
    }
  });

  for (const [name, num] of Object.entries(reportResult)) {
    if (num >= k) stoppedUser.push(name);
  }

  for (const name of id_list) {
    const arr = reportList[name];

    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
      if (stoppedUser.includes(arr[i])) {
        cnt++;
      }
    }

    answer.push(cnt);
  }

  return answer;
};
