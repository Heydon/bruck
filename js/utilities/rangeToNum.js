export default function rangeToNum(range) {
  if (!range.includes(',')) {
    return parseInt(range);
  }
  const rangeArr = range.split(',').map(i => parseInt(i));
  const num = Math.floor(Math.random() * (rangeArr[1] - rangeArr[0] + 1)) + rangeArr[0];
  return num;
}