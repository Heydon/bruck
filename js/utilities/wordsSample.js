import rangeToNum from '../utilities/rangeToNum.js';

export default function wordsSample(range) {
  const words = ['morbi', 'in', 'ex', 'sit', 'amet', 'quam', 'bibendum', 'semper', 'donec', 'accumsan', 'enim', 'nibh', 'vel', 'laoreet', 'eros', 'feugiat', 'sodales', 'nullam', 'feugiat', 'mi', 'vitae', 'tincidunt', 'iaculis', 'vestibulum', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'orci', 'luctus', 'et', 'ultrices', 'posuere', 'cubilia', 'curae', 'quisque', 'vulputate', 'nisi', 'eu', 'imperdiet', 'venenatis', 'lacus', 'sapien', 'tempus', 'nibh', 'ac', 'pretium', 'quam', 'dolor', 'nec', 'tellus', 'sed', 'a', 'mauris', 'efficitur', 'vehicula', 'lacus', 'non', 'varius', 'arcu', 'proin', 'consequat', 'quam', 'eu', 'vulputate', 'tincidunt', 'dolor', 'leo', 'pretium', 'arcu', 'ut', 'euismod', 'nisl', 'sapien', 'nec', 'lorem', 'fusce', 'nec', 'orci', 'in', 'enim', 'commodo', 'tristique', 'mauris', 'ornare', 'ante', 'vitae', 'sapien', 'tempus', 'sit', 'amet', 'porttitor', 'ante', 'egestas', 'in', 'malesuada', 'tellus', 'orci', 'eget', 'ultricies', 'ipsum', 'ultrices', 'ac', 'phasellus', 'nec', 'felis', 'nibh', 'morbi', 'convallis', 'luctus', 'ipsum', 'nec', 'interdum', 'pellentesque', 'ultrices', 'ligula', 'erat', 'non', 'sollicitudin', 'odio', 'auctor', 'at', 'duis', 'ac', 'diam', 'id', 'dui', 'blandit', 'tempus', 'eget', 'sed', 'erat', 'curabitur', 'euismod', 'varius', 'neque', 'cras', 'ac', 'justo', 'congue', 'mattis', 'urna', 'ornare', 'semper', 'mi'];

  const num = rangeToNum(range);
  const wordsOut = [];
  for (let i = 0; i < num; i++) {
    wordsOut.push(words[Math.floor(Math.random() * words.length)]);
  }
  return wordsOut;
}