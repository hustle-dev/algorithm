/**
 * Repeated DNA Sequences
 * https://leetcode.com/problems/repeated-dna-sequences/
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const sH = new Map();
  const answer = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    const seq = s.slice(i, i + 10);
    if (!sH.has(seq)) sH.set(seq, 1);
    else answer.add(seq);
  }
  console.log(answer);

  return [...answer];
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
