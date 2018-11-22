import rangeToNum from '../utilities/rangeToNum.js';

export default function wordsSample(range) {
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
  for (let i = 0; i < num; i++) {
    wordsOut.push(words[Math.floor(Math.random() * words.length)]);
  }
  return wordsOut;
}