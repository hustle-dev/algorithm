// 프로그래머스에선 런타임 에러 발생 ㅜㅜ

function solution(stones, k) {
    let answer = Number.MAX_SAFE_INTEGER;
    let lt = Math.min(...stones);
    let rt = Math.max(...stones);
    let tempArr = stones.slice();

    function count(mid) {
        let tmp = tempArr.map(x => x - mid);
        let cnt = 0;
        let maxValue = 0;

        for(let i = 0; i<tmp.length; i++) {
            if(tmp[i] <= 0) {
                cnt++;
                let j = i+1;
                while(tmp[j] <= 0 && j<tmp.length) {
                    cnt++;
                    j++;
                }
                maxValue = Math.max(maxValue, cnt);
                cnt = 0;
            }
        }

        return maxValue;
    }

    while(lt <= rt) {
        let mid = parseInt((lt + rt)/2);
        
        if(count(mid) >= k) {
            answer = mid;
            rt = mid -1;
        } else {
            lt = mid +1;
        }
    }

    return answer;
}

console.log(solution([1, 5, 1, 3], 2));