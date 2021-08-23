function solution(record) {
    let answer = [];
    let sh = new Map();

    for(let i = 0; i<record.length; i++) {
        let command = record[i].split(" ")[0];
        let key = record[i].split(" ")[1];
        let name = record[i].split(" ")[2];

        if(command == "Enter") {
            sh.set(key, name);
        } else if(command == "Leave") {
            if(sh.get(key) === 1) {
                sh.delete(key);
            }
        } else {
            sh.set(key, name);
        }
    }

    for(let i = 0; i<record.length; i++) {
        let command = record[i].split(" ")[0];
        let key = record[i].split(" ")[1];
        let name = sh.get(key);

        if(command === "Enter") {
            answer.push(`${name}님이 들어왔습니다.`)
        } else if(command === "Leave") {
            answer.push(`${name}님이 나갔습니다.`)
        } else {
            continue;
        }
    }


    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));