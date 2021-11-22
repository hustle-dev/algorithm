/**
 * Word Ladder
 * https://leetcode.com/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const wordLength = beginWord.length;
  let difCount = 0;

  let totalLength = 1;
  if (!wordList.includes(beginWord)) {
    wordList.unshift(beginWord);
  }

  for (let i = 0; i < beginWord.length; i++) {
    if (beginWord[i] === endWord[i]) continue;

    difCount += 1;
  }

  if (
    (wordList.includes(beginWord) && beginWord.length === 1) ||
    (wordList.indexOf(endWord) - wordList.indexOf(beginWord) === 1 && difCount === 1)
  ) {
    totalLength = 0;
  }

  difCount = 0;

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
};
