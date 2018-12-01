import wordsSample from './wordsSample.js'

test('returns an array', () => {
  const sample = wordsSample('10,20');
  expect(Array.isArray(sample)).toBe(true);
});

test('returned array length to be between 10 and 20', () => {
  const sample = wordsSample('10,20');
  console.log(sample.length);
  expect(sample.length).toBeLessThan(21);
  expect(sample.length).toBeGreaterThan(9);
});