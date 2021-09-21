import isEqual from './isEqual';

test('isEqual test', () => {
  // 인수 미전달
  expect(() => isEqual()).toThrow(
    `isEqual requires at least 2 argument, but only 0 were passed`
  );
  expect(() => isEqual(0)).toThrow(
    `isEqual requires at least 2 argument, but only 1 were passed`
  );

  // number
  expect(isEqual(1, 1)).toBe(true);
  expect(isEqual(1, 2)).toBe(false);
  expect(isEqual(Infinity, Infinity)).toBe(true);
  expect(isEqual(Infinity, -Infinity)).toBe(false);

  // 0 === -0 => true로 평가되지만 isEqual(0, -0)는 false를 반환
  expect(isEqual(0, -0)).toBe(false);
  expect(isEqual(0, -0)).toBe(Object.is(0, -0));
  expect(isEqual(-0, 0)).toBe(false);
  expect(isEqual(0, 0)).toBe(true);
  expect(isEqual(-0, -0)).toBe(true);

  // NaN === NaN => false로 평가되지만 isEqual(NaN, NaN) => true를 반환
  expect(isEqual(NaN, NaN)).toBe(true);

  // string
  expect(isEqual('a', 'a')).toBe(true);
  expect(isEqual('a', 'b')).toBe(false);

  // boolean
  expect(isEqual(true, true)).toBe(true);
  expect(isEqual(false, false)).toBe(true);
  expect(isEqual(true, false)).toBe(false);

  // null === undefine => false
  expect(isEqual(null, null)).toBe(true);
  expect(isEqual(undefined, undefined)).toBe(true);
  expect(isEqual(null, undefined)).toBe(false);

  // Symbol
  expect(isEqual(Symbol('mySymbol'), Symbol('mySymbol'))).toBe(false);
  expect(isEqual(Symbol.for('mySymbol'), Symbol.for('mySymbol'))).toBe(true);

  // type check
  expect(isEqual(1, '1')).toBe(false);
  expect(isEqual('1', 1)).toBe(false);
  expect(isEqual('1', '1')).toBe(true);
  expect(isEqual({}, [])).toBe(false);
  expect(isEqual({}, () => {})).toBe(false);

  // object
  expect(isEqual({}, {})).toBe(true);
  expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
  expect(isEqual({ b: 2, a: 1 }, { a: 1, b: 2 })).toBe(true);
  expect(
    isEqual(
      { a: 1, b: { c: 2, d: { e: 3 } } },
      { b: { d: { e: 3 }, c: 2 }, a: 1 }
    )
  ).toBe(true);
  expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
  expect(isEqual({ a: 1 }, { b: 1 })).toBe(false);
  expect(isEqual({ b: 2, a: 1 }, { a: 1, b: 2, c: 1 })).toBe(false);
  expect(
    isEqual(
      { a: 1, b: { c: 2, d: { e: 3 } } },
      { b: { d: { e: 3, f: 4 }, c: 2 }, a: 1 }
    )
  ).toBe(false);

  // array
  expect(isEqual([], [])).toBe(true);
  expect(isEqual([1], [1])).toBe(true);
  expect(isEqual([1, [2, [3]]], [1, [2, [3]]])).toBe(true);
  expect(isEqual([1, { a: 2, c: { d: 3 } }], [1, { a: 2, c: { d: 3 } }])).toBe(
    true
  );
  expect(isEqual([1, 2], [1])).toBe(false);
  expect(
    isEqual([1, { a: 2, c: { d: 3 } }], [1, { a: 2, c: { d: 3, e: 4 } }])
  ).toBe(false);

  // builtin object
  // 원시값, 일반 객체, 배열 외의 객체(함수, Date, RegExp, Set, Map, Promise 등)은 ===으로 단순 비교한다.
  // ⚠️ _.isEqual(/a/g, /./g)) => false
  const d = new Date();
  expect(isEqual(d, d)).toBe(true);
  expect(isEqual(new Date(), new Date())).toBe(false);
  expect(isEqual(/a/g, /b/g)).toBe(false);
  expect(isEqual(new Set([1]), new Set([1]))).toBe(false);
  expect(isEqual(new Set([1]), new Set([1, 2]))).toBe(false);
  expect(isEqual(new Map([['key', 'value']]), new Map([['a', 'b']]))).toBe(
    false
  );

  // 함수는 ===으로 비교한다.
  expect(
    isEqual(
      () => {},
      () => {}
    )
  ).toBe(false);
  expect(isEqual({ f: () => {} }, { f: () => {} })).toBe(false);
});
