const convertToSecond = time => {
  const [HH, MM, SS] = time.split(':');
  return HH * 3600 + MM * 60 + SS * 1;
};

const convertToHHMMSS = time => {
  let HH = Math.floor(time / 3600);
  let MM = Math.floor((time / 60) % 60);
  let SS = time % 60;

  HH = HH > 9 ? HH : '0' + HH;
  MM = MM > 9 ? MM : '0' + MM;
  SS = SS > 9 ? SS : '0' + SS;

  return `${HH}:${MM}:${SS}`;
};

const solution = (play_time, adv_time, logs) => {
  const playTotal = convertToSecond(play_time);
  const advTotal = convertToSecond(adv_time);
  if (playTotal === advTotal) {
    return '00:00:00';
  }
  const dp = new Array(playTotal + 1).fill(0);

  logs.forEach(log => {
    const [start, end] = log.split('-');
    const startTotal = convertToSecond(start);
    const endTotal = convertToSecond(end);
    dp[startTotal] += 1;
    dp[endTotal] -= 1;
  });

  for (let i = 1; i < dp.length; i++) {
    dp[i] = dp[i] + dp[i - 1];
  }

  for (let i = 1; i < dp.length; i++) {
    dp[i] = dp[i] + dp[i - 1];
  }

  let sum = dp[advTotal - 1];
  let index = 0;

  for (let i = advTotal - 1; i < playTotal; i++) {
    if (sum < dp[i] - dp[i - advTotal]) {
      sum = dp[i] - dp[i - advTotal];
      index = i - advTotal + 1;
    }
  }

  return convertToHHMMSS(index);
};
