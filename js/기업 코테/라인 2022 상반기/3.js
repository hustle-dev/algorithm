const solution = (num_teams, remote_tasks, office_tasks, employees) => {
  const answer = [];

  const officeTasks = new Map();

  for (const work of office_tasks) {
    officeTasks.set(work, 1);
  }

  const officeTeams = {};
  const remoteTeams = {};
  const numTeams = new Array(11).fill(0);

  const employeeswithNum = employees.map((employee, i) => {
    employee = employee + ` ${i + 1}`;

    return employee;
  });

  for (const employee of employeeswithNum) {
    const employeeArr = employee.split(' ');
    const N = employeeArr.length;

    const teamNum = employeeArr[0];
    const employeeNum = employeeArr[N - 1];

    numTeams[teamNum] = 1;

    let flag = true;

    // 오피스 팀에 넣어진 사람
    for (let i = 1; i < N - 1; i++) {
      if (officeTasks.has(employeeArr[i])) {
        flag = false;
        if (!officeTeams[teamNum]) {
          officeTeams[teamNum] = [employeeNum];
        } else {
          officeTeams[teamNum].push(employeeNum);
        }
        break;
      }
    }

    // 재택 가능한 업무들만 있는 사람
    if (flag) {
      if (!remoteTeams[teamNum]) {
        remoteTeams[teamNum] = [employeeNum];
      } else {
        remoteTeams[teamNum].push(employeeNum);
      }
    }
  }

  for (let i = 1; i <= 10; i++) {
    if (numTeams[i] === 1) {
      if (!officeTeams[i]) {
        remoteTeams[i].shift();
      }
    }
  }

  for (const [key, arr] of Object.entries(remoteTeams)) {
    answer.push(...arr);
  }

  for (let i = 0; i < answer.length; i++) {
    answer[i] = Number(answer[i]);
  }

  return answer;
};

console.log(
  solution(
    3,
    ['development', 'marketing', 'hometask'],
    ['recruitment', 'education', 'officetask'],
    [
      '1 development hometask',
      '1 recruitment marketing',
      '2 hometask',
      '2 development marketing hometask',
      '3 marketing',
      '3 officetask',
      '3 development',
    ]
  )
);
//  [1, 4, 5, 7]

console.log(
  solution(
    2,
    ['design'],
    ['building', 'supervise'],
    ['2 design', '1 supervise building design', '1 design', '2 design']
  )
);

// [3, 4]
