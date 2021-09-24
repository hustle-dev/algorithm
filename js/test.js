// function solution(board) {
//   const N = board[0].length;
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, -1, 0, 1];
//   const weightArr = Array.from({ length: N }, () => Array(N).fill(0));

//   function BFS() {
//     const queue = [];
//     queue.push([0, 0]);

//     while (queue.length) {
//       const [curX, curY, dir, weight] = queue.shift();

//       for (let i = 0; i < 4; i++) {
//         let nx = curX + dy[i];
//         let ny = curY + dx[i];
//         if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] === 0) {
//         }
//       }
//       console.log(curX);
//       console.log(curY);
//     }
//   }

//   board[0][0] = 1;
//   BFS();

//   console.log(N);
// }

// console.log(
//   solution([
//     [
//       [0, 0, 0, 0, 0, 0, 0, 1],
//       [0, 0, 0, 0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0, 1, 0, 0],
//       [0, 0, 0, 0, 1, 0, 0, 0],
//       [0, 0, 0, 1, 0, 0, 0, 1],
//       [0, 0, 1, 0, 0, 0, 1, 0],
//       [0, 1, 0, 0, 0, 1, 0, 0],
//       [1, 0, 0, 0, 0, 0, 0, 0],
//     ],
//   ])
// );

// const arr = [[0, 0]];

// const [a, b, x] = arr.shift();

// console.log(x === undefined);

function solution(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const wordLength = beginWord.length;
  let difCount = 0;

  let totalLength = 1;
  if (!wordList.includes(beginWord)) {
    wordList.unshift(beginWord);
  }

  if (
    (wordList.includes(beginWord) && beginWord.length === 1) ||
    wordList.indexOf(endWord) - wordList.indexOf(beginWord) === 1
  ) {
    totalLength = 0;
  }

  const queue = [];
  queue.push(beginWord);

  while (queue.length) {
    totalLength += 1;
    const len = queue.length;

    console.log(queue);
    for (let k = 0; k < len; k++) {
      let compWord = queue.shift();
      for (let i = 0; i < wordList.length; i++) {
        for (let j = 0; j < wordLength; j++) {
          if (compWord[j] === wordList[i][j]) continue;

          difCount += 1;
        }

        if (difCount === 1) {
          queue.push(wordList[i]);
          wordList.splice(i, 1);
          i--;
        }

        difCount = 0;
      }

      for (let i = 0; i < queue.length; i++) {
        for (let j = 0; j < wordLength; j++) {
          if (endWord[j] === queue[i][j]) continue;

          difCount += 1;
        }

        if (difCount === 1 || difCount === 0) return totalLength + 1;

        difCount = 0;
      }
    }
  }

  return 0;
}

console.log(solution('hot', 'dog', ['hot', 'dog', 'dot']));

// wordList.includes(beginWord) ? 0 :
