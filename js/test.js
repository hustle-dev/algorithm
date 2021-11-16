const restoreIpAddresses = s => {
  const answer = [];
  const validIp = s.replace(/[^0-9]/g, '');
  let changeString = '';
  const temp = [];
  const stageString = [];

  stageString.push(validIp);

  // console.log(stageString);

  function DFS(L) {
    if (L === 3) {
      // console.log(stageString);
      // console.log(temp);
      if (stageString[3].length > 3) {
        stageString.pop();
        return;
      }
      if (
        (stageString[3].length !== 1 && stageString[3][0] === '0') ||
        +stageString[3] > 255 ||
        stageString[3] === ''
      ) {
        stageString.pop();
        return;
      }

      // console.log(temp);
      temp.push(stageString[3]);
      // console.log(temp);
      const ipFormat = [...temp].map(el => +el).join('.');

      answer.push(ipFormat);
      // console.log(answer);
      temp.pop();
      stageString.pop();
    } else {
      for (let i = 1; i <= 3; i++) {
        // console.log('stageString', stageString);
        changeString = stageString[L];
        // console.log('changeString', changeString, L);
        const sliceNum = changeString.slice(0, i);
        if ((sliceNum.length !== 1 && sliceNum[0] === '0') || +sliceNum > 255 || sliceNum === '') {
          // console.log('hi');
          stageString.pop();
          break;
        }
        temp.push(sliceNum);
        // console.log('temp', temp);
        stageString.push(changeString.slice(i));
        DFS(L + 1);
        temp.pop();
        if (i === 3) {
          stageString.pop();
        }
      }
    }
  }

  DFS(0);

  // console.log(answer);
  return answer;
};

console.log(restoreIpAddresses('0000'));
console.log(restoreIpAddresses('1111'));
console.log(restoreIpAddresses('010010'));
console.log(restoreIpAddresses('25525511135'));
