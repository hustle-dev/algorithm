function solution(n, m) {
    let answer = [], tmp = [];
    function DFS(L) {
        if (L === m) {
            answer.push(tmp.slice());
        } else {
            for(let i = 1; i<=n; i++) { // i가 뽑는 숫자, n번을 돌음
                tmp.push(i);
                DFS(L+1); // 종료지점을 위해
                tmp.pop();
            }
        }
    }
    DFS(0);
    return answer; 
}

console.log(solution(3, 2));