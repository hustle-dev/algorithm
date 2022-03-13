const solution = (S, interval) => {
  let tempStr = [...S];

  for (const [a, b] of interval) {
    if (a === b) continue;
    const newString = [...tempStr];
    const reverseString = newString.splice(a - 1, b - a + 1).reverse();
    tempStr.splice(a - 1, b - a + 1, ...reverseString);
  }

  return tempStr.join('');
};
