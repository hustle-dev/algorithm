const solution = cards => {
  const N = cards.length;
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) evenSum += cards[i];
    else oddSum += cards[i];
  }

  let newOddSum = 0;
  let newEvenSum = 0;
  let resultEven = 0;
  let resultOdd = 0;

  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      newEvenSum += cards[i];
      resultOdd = newOddSum + evenSum - newEvenSum;
      resultEven = newEvenSum + oddSum - newOddSum - cards[i];
    } else {
      newOddSum += cards[i];
      resultEven = newEvenSum + oddSum - newOddSum;
      resultOdd = newOddSum + evenSum - newEvenSum - cards[i];
    }

    console.log('newOddSum: ', newOddSum);
    console.log('newEvenSum: ', newEvenSum);

    if (resultEven === resultOdd) {
      return i + 1;
    }
  }

  return -1;
};

// console.log(solution([2, 4, 6, 3, 4]));
// console.log(solution([2, 5, 3, 1]));
// console.log(solution([2, 5, 2, 7, 8, 4]));
console.log(solution([2, 5, 7, 8, 4]));
