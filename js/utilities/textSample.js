export default function textSample(range) {
  const words = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipscing',
    'elit',
    'nullam',
    'egestas',
    'magna',
    'sit',
    'amet',
    'diam',
    'consequat',
    'eu'
  ];

  const rangeArr = range.split(',').map(i => parseInt(i));
  const wordNum = Math.floor(Math.random() * (rangeArr[1] - rangeArr[0] + 1)) + rangeArr[0];
  const wordsOut = [];
  for (let i = 0; i <= wordNum; i++) {
    wordsOut.push('<span>' + words[Math.floor(Math.random() * words.length)] + '</span>');
  }
  return wordsOut.join(' ');
}