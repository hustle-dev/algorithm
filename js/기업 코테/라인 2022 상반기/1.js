const solution = logs => {
  // 수집하지 않는 로그의 개수를 return 하라!
  // log -> t a e m 형식이어야한다. (소문자 혹은 대문자)
  // 한칸의 공백으로 구분되어있어야 한다.

  let answer = 0;

  logs.forEach(log => {
    if (log.length <= 100) {
      const splitArr = log.split(/\s/);

      let flag = false;
      if (
        splitArr.length === 12 &&
        splitArr[0].toLowerCase() === 'team_name' &&
        splitArr[3].toLowerCase() === 'application_name' &&
        splitArr[6].toLowerCase() === 'error_level' &&
        splitArr[9].toLowerCase() === 'message'
      ) {
        if (
          !splitArr[2].match(/[^a-zA-Z]/) &&
          !splitArr[5].match(/[^a-zA-Z]/) &&
          !splitArr[8].match(/[^a-zA-Z]/) &&
          !splitArr[11].match(/[^a-zA-Z]/)
        ) {
          flag = true;
        }
      }

      if (!flag) {
        // console.log(log);
        answer += 1;
      }
    } else {
      answer += 1;
    }
  });

  return answer;
};

console.log(
  solution([
    'team_name : db application_name : dbtest error_level : info message : test',
    'team_name : test application_name : I DONT CARE error_level : error message : x',
    'team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndIWillTestForever',
    'team_name : oberervability application_name : LogViewer error_level : error',
  ])
);

console.log(
  solution([
    'team_name : MyTeam application_name : YourApp error_level : info messag : IndexOutOfRange',
    'no such file or directory',
    'team_name : recommend application_name : recommend error_level : info message : RecommendSucces11',
    'team_name : recommend application_name : recommend error_level : info message : Success!',
    '   team_name : db application_name : dbtest error_level : info message : test',
    'team_name     : db application_name : dbtest error_level : info message : test',
    'team_name : TeamTest application_name : TestApplication error_level : info message : ThereIsNoError',
  ])
);

// const word = 'Succ1';
// const word2 = 'Succ!';
// const word3 = 'Succ';

// console.log(word.match(/[^a-zA-z]/));
// console.log(word2.match(/[^a-zA-z]/));
// console.log(word3.match(/[^a-zA-z]/));
