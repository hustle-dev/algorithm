const solution = s => {
  let ans = s;
  const convertStoN = [
    ['zero', '0'],
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
  ];

  for (const [str, num] of convertStoN) {
    const rE = new RegExp(str, 'g');

    let newString = ans.replace(rE, num);
    ans = newString;
  }

  return Number(ans);
};

console.log(solution('one4seveneight', 1478));
console.log(solution('23four5six7', 234567));
console.log(solution('2three45sixseven', 234567));
console.log(solution('123', 123));
