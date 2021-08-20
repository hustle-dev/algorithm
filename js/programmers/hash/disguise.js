function solution(clothes) {
    let answer = 0;
    let sum = 1;
    let clothMap = new Map();
    
    for(let [a, b] of clothes) {
        clothMap.set(b, clothMap.get(b) + 1 || 1);
    }

    if(clothMap.size !== 1) {
        for(let key of clothMap.keys()) {
            sum *= clothMap.get(key) + 1;
        }
        answer += (sum-1);
    } else {
        for(let key of clothMap.keys()) {
            answer += clothMap.get(key);
        }
    }

    return answer;
}

console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"], ["hi", "hi"], ["h2", "hi"], ["b", "a"], ["c", "a"]]))