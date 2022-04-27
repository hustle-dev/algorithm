const deepCopy = target => {
  if (target === null || typeof target !== 'object') return target;

  const result = Array.isArray ? [] : {};

  Object.keys(target).forEach(key => {
    result[key] = deepCopy(target[key]);
  });

  return result;
};
