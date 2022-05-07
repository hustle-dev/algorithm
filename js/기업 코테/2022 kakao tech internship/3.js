// 모든 문제를 풀 수 있는 알고력과 코딩력을 얻는 최단시간 return
// 모든 문제를 1번이상 풀 필요는 없음
const solution = (alp, cop, problems) => {
  //   const ch = new Array(problems.length).fill(0);
  let solvedProblems = 0;
  let ans = Number.MAX_SAFE_INTEGER;
  let store = [
    [1, 0, 1],
    [0, 1, 1],
  ];

  problems.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  const DFS = (curAlp, curCop, solvedProblems, time, leftProblem, store) => {
    console.log(curAlp, curCop, solvedProblems, time);
    console.log(store);

    if (solvedProblems >= problems.length) {
      return;
    }
    const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = leftProblem[0];

    if (curAlp >= alp_req && curCop >= cop_req) {
      if (leftProblem.length === 1) {
        if (ans > time) ans = time;

        return;
      }

      const newLeftProblems = [...leftProblem];
      const repush = newLeftProblems.shift();

      const newStore = [...store];
      newStore.push(repush.slice(2));

      DFS(
        curAlp + alp_rwd,
        curCop + cop_rwd,
        solvedProblems + 1,
        time + cost,
        newLeftProblems,
        newStore
      );
    } else if (curAlp >= alp_req && curCop < cop_req) {
      for (const problem of store) {
        const [alp_rwd, cop_rwd, cost] = problem;
        if (cop_rwd === 0) continue;

        DFS(curAlp + alp_rwd, curCop + cop_rwd, solvedProblems, time + cost, leftProblem, store);
      }
    } else if (curAlp < alp_req && curCop >= cop_req) {
      for (const problem of store) {
        const [alp_rwd, cop_rwd, cost] = problem;
        if (alp_rwd === 0) continue;

        DFS(curAlp + alp_rwd, curCop + cop_rwd, solvedProblems, time + cost, leftProblem, store);
      }
    } else {
      for (const problem of store) {
        const [alp_rwd, cop_rwd, cost] = problem;
        DFS(curAlp + alp_rwd, curCop + cop_rwd, solvedProblems, time + cost, leftProblem, store);
      }
    }
  };

  DFS(alp, cop, 0, 0, problems, store);

  return ans;
};

// problems에서 알고력과 코딩력
// -> alp

// console.log(
//   solution(10, 10, [
//     [10, 15, 2, 1, 2],
//     [20, 20, 3, 3, 4],
//   ])
// );
console.log(
  solution(0, 0, [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ])
);
