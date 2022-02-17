const solution = s => {
  let lt = 0;
  let rt = s.length - 1;

  while (lt < rt) {
    if (s[lt] !== s[rt]) {
      let s1 = s.substring(lt, rt);
      let s2 = s.substring(lt + 1, rt + 1);

      if (s1 !== s1.split('').reverse().join('') && s2 !== s2.split('').reverse().join('')) {
        return 'NO';
      } else {
        return 'YES';
      }
    }
    lt++;
    rt--;
  }
};

console.log(solution('abcbdcba'));
console.log(solution('abcabbakcba'));
console.log(solution('abcacbakcba'));
