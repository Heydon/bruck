import rangeToNum from './rangeToNum.js'

test('returns number between two other numbers (inclusive)', () => {
  const num = rangeToNum('2,8');
  expect(num).toBeLessThan(9);
  expect(num).toBeGreaterThan(1);
});

test('returns number', () => {
  const num = rangeToNum('8');
  expect(num).toBe(8);
});