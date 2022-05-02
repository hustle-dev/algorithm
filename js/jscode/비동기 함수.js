// 변수 a가 주어지면 a! 값을 3초 이후에 출력하도록 만드는 비동기 함수를 만들어라,

const a = 5;
const DELAY_TIME = 3000;

const factorial = n => {
  if (n <= 0) throw new Error('1이상의 값이 들어와야 합니다.');
  if (n === 1) return 1;
  else return factorial(n - 1) * n;
};

// setTimeout 함수 버전
// const solution = () => {
//   setTimeout(() => {
//     console.log(factorial(a));
//   }, DELAY_TIME);
// };

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Promise 버전
const solution = async () => {
  try {
    await wait(DELAY_TIME);
    console.log(factorial(a));
  } catch (error) {
    throw new Error(error);
  }
};

solution();
