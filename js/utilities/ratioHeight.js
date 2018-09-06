export default function ratioHeight(r) {
  const nums = r.split(':').map(num => parseInt(num));
  console.log((nums[0] / nums[1]) * 100);
  return (nums[0] / nums[1]) * 100;
}