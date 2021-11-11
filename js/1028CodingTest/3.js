const solution = (fees, records) => {
  let answer;
  const [generalTime, generalFee, perTime, perFee] = fees;
  const sH = new Map();
  const nH = new Map();
  const inCar = [];

  records.forEach(record => {
    const [carTime, carNum, type] = record.split(' ');
    const [h2, m2] = carTime.split(':');
    let h1 = 23;
    let m1 = 59;

    sH.set(carNum, sH.get(carNum) || 0);
    nH.set(carNum, nH.get(carNum) || 0);

    if (type === 'IN') {
      inCar.push([carNum, carTime]);
    } else {
      for (let i = 0; i < carNum.length; i++) {
        if (inCar[i][0] === carNum) {
          [h1, m1] = inCar[i][1].split(':');
          inCar.splice(i, 1);
          break;
        }
      }

      let totalTime = (Number(h2) - Number(h1)) * 60 + (Number(m2) - Number(m1));

      nH.set(carNum, nH.get(carNum) + totalTime);
    }
  });

  if (inCar.length !== 0) {
    inCar.forEach(el => {
      const [carNum, carTime] = el;
      const [h2, m2] = carTime.split(':');
      let h1 = 23;
      let m1 = 59;

      let totalTime = (Number(h1) - Number(h2)) * 60 + (Number(m1) - Number(m2));

      nH.set(carNum, nH.get(carNum) + totalTime);
    });
  }

  [...nH.entries()].forEach(info => {
    const [carNum, carTime] = info;

    if (carTime > generalTime) {
      sH.set(
        carNum,
        sH.get(carNum) + generalFee + Math.ceil((carTime - generalTime) / perTime) * perFee
      );
    } else {
      sH.set(carNum, sH.get(carNum) + generalFee);
    }

    // console.log(carNum, carTime);
  });

  answer = [...sH].sort((a, b) => a[0] - b[0]).map(el => el[1]);

  return answer;
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:58 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);
