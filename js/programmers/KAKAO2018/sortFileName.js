const solution = files => {
  let answer = [];

  // head 기준 사전 정렬

  const temp = Array.from({ length: files.length }, () => Array());

  for (let i = 0; i < files.length; i++) {
    temp[i].push(i);
    files[i].replace(/[a-zA-Z-. ]+|[0-9]+/g, match => temp[i].push(match));
    temp[i].push(files[i]);
  }

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

  answer = temp.map(file => file[file.length - 1]);

  return answer;
};
