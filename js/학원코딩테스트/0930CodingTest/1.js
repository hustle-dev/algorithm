// 만약 N=5인 수열이 아래와 같고[1, 2, 1, 1, 2]k=2라면 홀수의 개수가 2개인 연속부분수열은[1, 2, 1], [2, 1, 1], [2, 1, 1, 2], [1, 1], [1, 1, 2] 로 5가지입니다.

// ▣ 입력설명매개변수 nums에 N(1≤N≤100,000)길이의 수열이 주어집니다.매개변수 k에 k(1≤k≤20,000)이 주어집니다.수열의 원소값은 1,000을 넘지 않는 자연수입니다.

// ▣ 출력설명경우의 수를 반환합니다.

// ▣ 매개변수 형식 1
// [1, 2, 1, 1, 2], 2

// ▣ 반환값 형식 1
// 5

// ▣ 매개변수 형식 2
// [2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2

// ▣ 반환값 형식 2
// 16

// ▣ 매개변수 형식 3
// [2, 4, 6], 1

// ▣ 반환값 형식 3
// 0

// (1, 2, 3, 4, 8, 16, 32)--현수의 이동경로
// (11, 12, 14, 17, 21, 26, 32)--송아지의 이동경로

function solution(nums, k) {
  let answer = 0;
  let nH = new Map();
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) cnt++;
    if (cnt === k) answer++;

    if (nH.has(cnt - k)) answer += nH.get(cnt - k);
    nH.set(cnt, nH.get(cnt) + 1 || 1);
    console.log(answer);
  }

  return answer;
}

console.log(solution([1, 2, 1, 1, 2], 2)); // 5
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16
console.log(solution([2, 4, 6], 1)); // 0
