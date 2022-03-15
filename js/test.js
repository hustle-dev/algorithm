const solution = (pattern, s) => {
  const words = s.split(' ');
  const map = new Map();

  if (words.length !== pattern.length) return false;
  if (new Set(words).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    const pat = pattern[i];
    const word = words[i];

    if (map.has(pat) && map.get(pat) !== word) return false;
    map.set(pat, word);
  }
  return true;
};

console.log(solution('abba', 'dog cat cat dog'));
console.log(solution('abba', 'dog cat cat fish'));
console.log(solution('aaa', 'dog cat cat dog'));
