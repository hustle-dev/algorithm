const solution = files => {
  let answer = [];

  // head 기준 사전 정렬

  const temp = Array.from({ length: files.length }, () => Array());

  // console.log(temp);

  for (let i = 0; i < files.length; i++) {
    temp[i].push(i);
    files[i].replace(/[a-zA-Z-. ]+|[0-9]+/g, match => temp[i].push(match));
    temp[i].push(files[i]);
  }

  console.log(temp);

  temp.sort((a, b) =>
    a[1].toLowerCase() > b[1].toLowerCase()
      ? 1
      : a[1].toLowerCase() < b[1].toLowerCase()
      ? -1
      : +a[2] > +b[2]
      ? 1
      : +a[2] < +b[2]
      ? -1
      : a[0] - b[0]
  );

  for (let i = 0; i < temp.length; i++) {
    answer.push(temp[i].join(''));
  }

  answer = temp.map(file => file[4]);

  return answer;
};

// console.log(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']));
// console.log(
//   solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'])
// );

// console.log(solution(['MUZI01.zip', 'muzi1.png']));
// console.log(solution(['ver-10.zip', 'ver-9.zip']));

// console.log(solution(['MUZI01.zip', 'muzi1.png', 'muzi000001.png', 'muzi10000.png']));

// console.log(
//   solution([
//     'muzi10000.pog',
//     'muzi000001.png',
//     'MUZI01.zip',
//     'muzi1.png',
//     'muzi000001.png',
//     'muzi10000.png',
//   ])
// );

console.log(solution(['F 15', 'F 16', 'F 10']));
