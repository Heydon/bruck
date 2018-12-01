import rangeToNum from '../utilities/rangeToNum.js';

export default function textSample(range) {
  const words = [
    'lorem',
    'ipsum',
    'dolor',
    'amet',
    'consectetur',
    'adipscing',
    'elit',
    'nullam',
    'egestas',
    'magna',
    'sit',
    'diam',
    'consequat',
    'eu',
    'pellentesque',
    'auctor',
    'elementum',
    'quam',
    'euismod',
    'urna',
    'bibendum',
    'faucibus',
    'tristique',
    'orci',
    'sed'
  ];

  const num = rangeToNum(range);
  const wordsOut = [];
  for (let i = 1; i <= num; i++) {
    console.log(i);
    wordsOut.push(`<span>${words[Math.floor(Math.random() * words.length)]}</span>`);
  }
  return wordsOut.join(' ');
}