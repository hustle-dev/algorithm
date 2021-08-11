function solution(participant, completion) {
    let answer = '';
    let sH = new Map();

    for(let x of participant) {
        sH.set(x, sH.get(x) + 1 || 1);
    }


    for(let i = 0; i<completion.length; i++) {
        sH.set(completion[i], sH.get(completion[i]) - 1);
        if(sH.get(completion[i]) === 0) {
            sH.delete(completion[i]);
        }
    }

    for(let [a, b] of sH) {
        answer = a;
    }
    return answer;
}