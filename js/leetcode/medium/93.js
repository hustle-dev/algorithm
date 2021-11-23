/**
 * @title Restore IP Addresses
 * @link https://leetcode.com/problems/restore-ip-addresses/submissions/
 * @param {string} s
 * @returns {string[]}
 */
const restoreIpAddresses = s => {
  const answer = [];
  const validIp = s.replace(/[^0-9]/g, '');
  let changeString = '';
  const temp = [];
  const stageString = [];
  stageString.push(validIp);

  function DFS(L) {
    if (L === 3) {
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
      temp.push(stageString[3]);
      const ipFormat = [...temp].map(el => +el).join('.');

      answer.push(ipFormat);
      temp.pop();
      stageString.pop();
    } else {
      for (let i = 1; i <= 3; i++) {
        changeString = stageString[L];
        const sliceNum = changeString.slice(0, i);
        if ((sliceNum.length !== 1 && sliceNum[0] === '0') || +sliceNum > 255 || sliceNum === '') {
          stageString.pop();
          break;
        }
        temp.push(sliceNum);
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
  return answer;
};

console.log(restoreIpAddresses('0000'));
console.log(restoreIpAddresses('1111'));
console.log(restoreIpAddresses('010010'));
console.log(restoreIpAddresses('25525511135'));
