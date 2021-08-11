function solution(n, lost, reserve) {
    let answer = 0;
    
    answer += n-lost.length;

    for(let i = 0; i<reserve.length; i++) {
        if(lost.includes(reserve[i])) {
            reserve.splice(i, i+1);
            answer++;
        }
    }

    for(let i = 0; i<reserve.length; i++) {
        if(lost.includes(reserve[i]-1)) {
            answer++;
            lost.splice(lost.indexOf(reserve[i]-1), 1);
        } else if(lost.includes(reserve[i]+1)) {
            answer++;
            lost.splice(lost.indexOf(reserve[i]-1), 1);
        } else {

        }
    }
    
    return answer;
}

console.log(solution(15, [7 ,8, 11 , 12, 14], [1, 4, 5, 9, 10, 14]));