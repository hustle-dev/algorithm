const solution = (m, musicinfos) => {
  let answer = '';
  let time = 0;
  const melody = m.replace(/.#/g, match => match[0].toLowerCase());

  musicinfos.forEach(music => {
    let [startTime, finishTime, musicTitle, info] = music.split(',');

    const [h1, m1] = startTime.split(':');
    const [h2, m2] = finishTime.split(':');

    const repeatNum = (h2 - h1) * 60 + Number(m2 - m1);

    info = info.replace(/.#/g, match => match[0].toLowerCase());

    const musicSheet =
      info.repeat(repeatNum / info.length) + info.substring(0, repeatNum % info.length);

    if (musicSheet.includes(melody)) {
      if (time < repeatNum) {
        time = repeatNum;
        answer = musicTitle;
      }
    }
  });

  return answer === '' ? '(None)' : answer;
};

console.log(
  solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', , '04:00,04:08,BAR,CC#BCC#BCC#B'])
);

console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']));

console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
