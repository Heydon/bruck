import ratioHeight from './ratioHeight.js'

test('returns ratio expressed as a percentage', () => {
  const ratio = ratioHeight('6:9');
  expect(ratio).toBeCloseTo(66.666);
});