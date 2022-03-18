function solution(logs) {
  const answer = new Array(24).fill(0);

  const logsArr = logs.split('\n');

  logsArr.forEach(log => {
    const time = log.split(' ')[1];
    const [HH, MM, SS] = time.split(':');
    if (Number(HH) + 9 < 24) {
      answer[Number(HH) + 9] += 1;
    } else {
      answer[Number(HH) + 9 - 24] += 1;
    }
  });

  return answer;
}
