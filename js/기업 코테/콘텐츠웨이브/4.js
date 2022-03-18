function solution(targets) {
  const N = targets.length;
  const curChoco = new Array(N).fill(1);
  const ateChoco = new Array(N).fill(0);

  const m = {};

  for (let i = 0; i < N; i++) {
    m[i] = targets[i];
  }

  while (true) {
    let flag = false;
    let curChocoString = curChoco.join('');

    for (let i = 0; i < N; i++) {
      if (curChoco[i] >= 2) {
        ateChoco[i] += curChoco[i] - 1;
        curChoco[i] = 1;
      }
    }

    for (const [key, value] of Object.entries(m)) {
      if (curChoco[key] > 0) {
        curChoco[Number(key)] -= 1;
        curChoco[Number(value - 1)] += 1;
      }
    }

    if (curChocoString === curChoco.join('')) flag = true;
    if (flag) break;
  }

  return ateChoco;
}
