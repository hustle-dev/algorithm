const solution = p => {
  if (p[0] === '>' && p[p.length - 1] === '<') return 0;

  let startPointCount = 0;

  if (p[0] === '>' && p[p.length - 1] === '>') {
    for (let i = p.length - 1; i >= 0; i--) {
      if (p[i] === '>') {
        startPointCount++;
      } else {
        break;
      }
    }
  } else if (p[0] === '<' && p[p.length - 1] === '<') {
    for (let i = 0; i < p.length; i++) {
      if (p[i] === '<') {
        startPointCount++;
      } else {
        break;
      }
    }
  } else {
    for (let i = p.length - 1; i >= 0; i--) {
      if (p[i] === '>') {
        startPointCount++;
      } else {
        break;
      }
    }

    for (let i = 0; i < p.length; i++) {
      if (p[i] === '<') {
        startPointCount++;
      } else {
        break;
      }
    }
  }

  return startPointCount;
};
