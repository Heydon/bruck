export default function ratioHeight(r) {
  const nums = r.split(':').map(num => parseInt(num));
  return (nums[0] / nums[1]) * 100;
}