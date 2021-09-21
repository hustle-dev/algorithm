import deepClone from './deepClone';

test('deepClone test', () => {
  expect(deepClone(1)).toBe(1);
  expect(deepClone('a')).toBe('a');
  expect(deepClone(true)).toBe(true);
  expect(deepClone(undefined)).toBe(undefined);
  expect(deepClone(null)).toBe(null);
  expect(deepClone(Symbol.for('mySymbol'))).toBe(Symbol.for('mySymbol'));

  const element = {
    type: 'h1',
    props: {
      className: 'app',
      children: [
        { type: 'li', props: { children: 'Hello' } },
        { type: 'li', props: { children: 'world' } },
      ],
    },
  };

  const copiedElement = deepClone(element);

  expect(copiedElement).toEqual(element);
  expect(element !== copiedElement).toBe(true);

  const obj = {
    a: {},
    b: [1, 2],
    c: {
      d: {},
      f: s => s,
    },
  };

  const deepCopy = deepClone(obj);

  expect(deepCopy).toEqual(obj);
  expect(obj !== deepCopy).toBe(true);
  expect(obj.a !== deepCopy.a).toBe(true);
  expect(obj.b !== deepCopy.b).toBe(true);
  expect(obj.c !== deepCopy).toBe(true);
  expect(obj.c.d !== deepCopy.c.d).toBe(true);

  // 함수는 클론되지 않는다. 하지만 동일한 동작을 한다.
  expect(obj.c.f === deepCopy.c.f).toBe(true);
  expect(obj.c.f('hi')).toBe('hi');
  expect(deepCopy.c.f('hi')).toBe('hi');
});
