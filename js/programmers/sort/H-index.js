function solution(citations) {
  citations.sort((a, b) => a - b);
  let totalLength = citations.length;
  let cur = 0;
  let max = 0;

  for (let i = 0; i <= citations.length; i++) {
    for (let j = 0; j < citations.length; j++) {
      if (i <= citations[j]) {
        cur = j;
        break;
      }
    }
    if (totalLength - cur >= i) {
      max = i;
    } else {
      break;
    }
  }

  if (citations[citations.length - 1] === 0) {
    return 0;
  }

  return max;
}
