const solution = files => {
  let answer;
  const temp = [];

  files.forEach((file, i) => {
    const HEAD = file.match(/[\D]+/g)[0];
    const NUMBER = file.match(/[\d]+/g)[0];
    temp.push([i, HEAD.toLowerCase(), Number(NUMBER), file]);
  });

  temp.sort((a, b) =>
    a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : a[2] > b[2] ? 1 : a[2] < b[2] ? -1 : a[0] - b[0]
  );

  answer = temp.map(file => file[file.length - 1]);
  return answer;
};
