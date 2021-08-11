function solution(progresses, speeds) {
    let answer = [];
    let queue = [];

    for(let x of progresses) {
        queue.push(x);
    }

    while(queue.length) {
        for(let i = 0; i<speeds.length; i++) {
            queue[i] = queue[i] + speeds[i];
        }
        if(queue[0] >= 100) {
            let cnt = 0;
            while(queue[0] >= 100) {
                cnt++;
                queue.shift();
                speeds.shift();
            }
            answer.push(cnt);
        }
    }
    return answer;
}