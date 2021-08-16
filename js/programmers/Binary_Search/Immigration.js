function solution(n, times) {
    let answer = Number.MAX_SAFE_INTEGER;
    let lt = 1;
    let rt = Math.max(...times) * n;

    function count(time) {
        let cnt = 0;

        for(let i = 0; i<times.length; i++) {
            cnt += parseInt(time/times[i]);
        }

        return cnt;
    }
    
    while(lt <= rt) {
        let mid = parseInt((lt+rt)/2);
        if(count(mid) >= n) {
            answer = mid;
            rt = mid-1;
        }
        else {
            lt = mid+1;
        }
    }

    return answer;
}

console.log(solution(6, [7, 10]));