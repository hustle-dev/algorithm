function solution(n, lost, reserve) {
    let answer = 0;
    let temp = lost;

    lost = lost.filter(v => !reserve.includes(v));
    reserve = reserve.filter(x => !temp.includes(x));

    answer = n - lost.length; 

    lost.sort((a, b) => a-b);
    reserve.sort((a, b) => a-b);


    console.log(lost)
    console.log(reserve);
    for(let x of lost) {
        if(reserve.includes(x-1)) {
            answer++;
            reserve.splice(reserve.indexOf(x-1), 1);
            console.log(reserve);
            continue;
        }
        else if(reserve.includes(x+1)) {
            answer++;
            reserve.splice(reserve.indexOf(x+1), 1);
            console.log(reserve);
            continue;
        }
    }

    return answer;
}