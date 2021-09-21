function deepClone(target) {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  // 배열인 경우 {}로 newObj를 생성하면 key로 유사배열 객체와 같이 숫자가 들어감.
  // 따라서 obj값이 배열인 경우 []로 생성해야한다.
  const newObject = Array.isArray(target) ? [] : {};

  Object.keys(target).forEach(key => {
    newObject[key] = deepClone(target[key]);
  });

  return newObject;
}

export default deepClone;
