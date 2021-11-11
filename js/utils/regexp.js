const solution = s => {
  const recommended = s
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '') // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    .replace(/\.{2,}/g, '.') // 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    .replace(/^\.|\.$/g, '') //마침표(.)가 처음이나 끝에 위치한다면 제거
    .replace(/^$/g, 'a') //빈 문자열이라면, new_id에 "a"를 대입
    .replace(/^.{16,}$/g, match => match.slice(0, 15)) // 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    .replace(/\.$/g, ''); // 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거

  return recommended.length > 2
    ? recommended
    : recommended + recommended.charAt(recommended.length - 1).repeat(3 - recommended.length);
};
