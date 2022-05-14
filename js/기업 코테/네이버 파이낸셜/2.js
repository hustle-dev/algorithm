const solution = (cities, roads, cars, customers) => {
  const changeToNum = alpabet => alpabet.charCodeAt() - 97;

  let maxN = 0;
  for (const city of cities) {
    const n = changeToNum(city);

    if (maxN < n) maxN = n;
  }

  maxN++;

  const graph = Array.from({ length: maxN }, () => Array(maxN).fill(Number.MAX_SAFE_INTEGER));

  roads.forEach(road => {
    const [x, y, z] = road.split(' ');
    graph[changeToNum(x)][changeToNum(y)] = Number(z);
    graph[changeToNum(y)][changeToNum(x)] = Number(z);
  });

  for (let i = 0; i < maxN; i++) {
    graph[i][i] = 0;
  }

  for (let i = 0; i < maxN; i++) {
    for (let j = 0; j < maxN; j++) {
      for (let k = 0; k < maxN; k++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  for (let i = 0; i < maxN; i++) {
    for (let j = 0; j < maxN; j++) {
      if (graph[i][j] === Number.MAX_SAFE_INTEGER) graph[i][j] = -1;
    }
  }

  const cityCar = {};

  cars.forEach(car => {
    const [a, b, c] = car.split(' ');

    if (cityCar[changeToNum(a)]) {
      cityCar[changeToNum(a)].push([b, c]);
    } else {
      cityCar[changeToNum(a)] = [[b, c]];
    }
  });

  console.log(graph);
  console.log(cityCar);

  const ans = [];

  customers.forEach(customer => {
    const [d, e, f] = customer.split(' ');
    let minimumCost = Number.MAX_SAFE_INTEGER;
    const possibleCar = [];

    for (const [key, val] of Object.entries(cityCar)) {
      for (let i = 0; i < val.length; i++) {
        if (val[i][0] >= Number(f)) {
          possibleCar.push([key, ...val]);
        }
      }
    }

    console.log(possibleCar);

    console.log('from: ', changeToNum(d), 'to: ', changeToNum(e), 'weight: ', Number(f));
  });

  //     // a: 도시에 존재하는 업체가 가지고 있음
  //     // b: 최대 적재무게
  //     // c: 1km당 이용 요금
  //     const [a, b, c] = cars[0]

  //     // d: 출발 도시
  //     // e: 도착 도시
  //     // f: 짐의 무게
  //     const [d, e, f] = customers[0];
};

console.log(
  solution(
    ['a', 'b', 'c'],
    ['a b 1', 'a c 1', 'b c 1'],
    ['a 100 10', 'b 300 20', 'c 50 4'],
    ['a b 100', 'a b 30', 'c a 250']
  )
);

console.log(
  solution(
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['a b 1', 'a c 1', 'c d 3', 'b d 5', 'b e 6', 'd e 2', 'f g 8'],
    [
      'a 100 10',
      'a 200 15',
      'b 100 5',
      'c 20 2',
      'c 300 30',
      'd 200 20',
      'e 500 100',
      'f 500 50',
      'g 100 40',
    ],
    ['g f 200', 'c e 50', 'd a 500', 'a b 50']
  )
);
