// 현수는 송아지를 잃어버렸습니다. 다행히 송아지에는 위치추적기가 달려 있습니다. 현수의 위치와 송아지의 현재 위치가 수직선상의 좌표 점으로 주어집니다.송아지는 처음 위치에서 시작해 매초 (이전이동거리+1)만큼 이동합니다. 송아지의 처음 이동거리는 1입니다.현수는 송아지를 잡기 위해 스카이 콩콩을 타고 가는데 현재 현수의 위치가 x라면 매초 앞으로 x +1, 뒤로 x -1, 앞으로 x*2 위치로 이동할 수 있다. 현수가 송아지를 잡는 가장 빠른 시간을 구하는 프로그램을 작성하세요. 현수의 위치와 송아지의 위치가 같으면 잡는 것으로 간주합니다.

// ▣ 입력설명매개변수 s, e에 현수의 최초 위치 S와 송아지의 최초 위치 E가 주어진다. 직선의 좌표 점은 1부터 200,000까지이다. (S와 E는 항상 서로 다른 값으로 입력됩니다.)

// ▣ 출력설명현수가 송아지를 잡는 최소시간을 반환하세요. 만약 송아지가 수직선상의 좌표 200,000을 넘어가면 송아지를 못 잡는 걸로 간주하고 -1를 반환합니다.

// ▣ 매개변수 형식 1
// 5, 6

// ▣ 반환값 형식 1
// 2

// ▣ 매개변수 형식 2
// 10, 3

// ▣ 반환값 형식 2
// 3

// ▣ 매개변수 형식 3
// 1, 11

// ▣ 반환값 형식 3
// 6

function solution(s, e) {
  let answer;

  function BFS() {
    let queue = new Set([s]);
    let L = 1;
    let x = 0;
    let curX = e;
    while (queue.size) {
      queue = Array.from(queue);
      x = x + 1;
      curX += x;
      const next = new Set();
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let v = queue.shift();
        for (let nv of [v - 1, v + 1, v * 2]) {
          if (nv >= 1 && nv <= 200000) {
            if (nv === curX) return L;
            next.add(nv);
          }
        }
      }
      queue = next;
      L++;
    }
    return -1;
  }

  answer = BFS();

  return answer;
}

console.log(solution(2, 11));
