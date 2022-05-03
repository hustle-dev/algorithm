const solution = (fees, records) => {
  const cumulativeFee = {};
  const inCar = {};

  records.forEach(record => {
    const [time, carNum, info] = record.split(' ');
    const [HH, MM] = time.split(':');
    const hourToMinute = Number(HH) * 60 + Number(MM);

    if (info === 'IN') {
      inCar[carNum] = hourToMinute;
    } else {
      if (cumulativeFee[carNum]) {
        cumulativeFee[carNum] += hourToMinute - inCar[carNum];
      } else {
        cumulativeFee[carNum] = hourToMinute - inCar[carNum];
      }
      inCar[carNum] = 'x';
    }
  });

  for (const [carNum, restTime] of Object.entries(inCar)) {
    if (restTime !== 'x') {
      if (cumulativeFee[carNum]) {
        cumulativeFee[carNum] += 23 * 60 + 59 - restTime;
      } else {
        cumulativeFee[carNum] = 23 * 60 + 59 - restTime;
      }
    }
  }

  const arr = [...Object.entries(cumulativeFee)];
  arr.sort((a, b) => a[0] - b[0]);

  const ans = [];
  const [generalTime, generalFee, perTime, perFee] = fees;

  for (const [carNum, time] of arr) {
    if (time > generalTime) {
      ans.push(generalFee + Math.ceil((time - generalTime) / perTime) * perFee);
    } else {
      ans.push(generalFee);
    }
  }

  return ans;
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);

console.log(
  solution(
    [120, 0, 60, 591],
    ['16:00 3961 IN', '16:00 0202 IN', '18:00 3961 OUT', '18:00 0202 OUT', '23:58 3961 IN']
  )
);
console.log(solution([1, 461, 1, 10], ['00:00 1234 IN']));
