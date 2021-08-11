function solution(answers) {
    let answer = [];
    let oneArr = [1, 2, 3, 4, 5];
    let twoArr = [2, 1, 2, 3, 2, 4, 2, 5];
    let threeArr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let maxValue = 0;

    let gradeArr = [0, 0, 0]

    for(let i = 0; i<answers.length; i++) {
        if(answers[i] === oneArr[i%oneArr.length]) gradeArr[0]++;
    }

    for(let i = 0; i<answers.length; i++) {
        if(answers[i] === twoArr[i%twoArr.length]) gradeArr[1]++;
    }

    for(let i = 0; i<answers.length; i++) {
        if(answers[i] === threeArr[i%threeArr.length]) gradeArr[2]++;
    }

    maxValue = Math.max(...gradeArr);

    for(let i = 0; i<gradeArr.length; i++) {
        if(maxValue === gradeArr[i]) {
            answer.push(i+1);
        }
    }

    return answer;
}