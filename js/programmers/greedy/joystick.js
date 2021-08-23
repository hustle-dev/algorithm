function solution(name) {
    let answer = 0;
    let cnt = 0;
    let min = name.length - 1;
    let index = 0;

    for(let x of name) {
        answer += Math.min(x.charCodeAt() - 'A'.charCodeAt(), 91-x.charCodeAt());
    }

    for(let i = min; i>=0; i--) {
        if(name[i] === 'A') {
            cnt++;
        } else {
            break;
        }
    }

    min = min - cnt;

    cnt = 0;
    for(let i = 0; i<name.length; i++) {
        if(name[i] === 'A') {
            cnt = (i - 1) * 2;
            index = i;
            break;
        }
    }

    min = Math.min(min, cnt+((name.length-1)-index));

    if(min < 0) {
        min = 0;
    }

    answer += min;

    return answer;
}


console.log(solution("AAAA"));
