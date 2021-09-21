function isObject(obj) {
  // 빌트인 객체를 구별하기 위해 constructor 사용
  return (
    obj &&
    typeof obj === 'object' &&
    (obj.constructor === Object || obj.constructor === Array)
  );
}

function isEqual(obj1, obj2) {
  if (arguments.length < 2)
    throw new Error(
      `isEqual requires at least 2 argument, but only ${arguments.length} were passed`
    );

  if (isObject(obj1) && isObject(obj2)) {
    // [], {} 같은 object 타입이므로 구별하기 위해서 사용
    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
      return false;
    }

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }

    for (const key of obj1Keys) {
      const val1 = obj1[key];
      const val2 = obj2[key];
      const areObject = isObject(val1) && isObject(val2);
      if ((!areObject && val1 !== val2) || (areObject && !isEqual(val1, val2)))
        return false;
    }

    return true;
  }

  return Object.is(obj1, obj2);
}

export default isEqual;
