function isPrime(num) {
    if (num === 1) return false;

    if (num === 2) return true;

    for(let i = 2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(numbers) {
    let answer = 0;
    let temp = numbers.split("");
    let tempSet = new Set();
    let tmp = []
    let ch = Array.from({length: temp.length}, () => 0);
    
    function DFS(L, m) {
        if (L===m) {
            while(tmp[0] === '0') {
                tmp.shift();
            }
            if(tmp.length !== 0) {
                tempSet.add(Number(tmp.slice().join("")));
            }
        } else {
            for(let i = 0; i<numbers.length; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    tmp.push(temp[i]);
                    DFS(L+1, m);
                    tmp.pop();
                    ch[i] = 0;
                }
            }
        }
    }
    
    for(let i = 1; i<=temp.length; i++) {
        DFS(0, i);
    }

    let tempArr = Array.from(tempSet);

    for(let x of tempArr) {
        if(isPrime(x)) {
            answer++;
        }
    }

    return answer;
}

console.log(solution("17"));
