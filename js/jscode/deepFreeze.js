const deepFreeze = target => {
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);

    Object.keys(target).forEach(key => deepFreeze(target[key]));
  }

  return target;
};
