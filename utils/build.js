import nunjucks from 'nunjucks';
import fs from 'fs-jetpack';
import config from '../bruck.config.js';

const manifest = fs.read('custom-elements.json', 'json');

const html = nunjucks.render('bruck.njk', {...config, manifest});
fs.copy('elements', 'build/js/elements', { overwrite: true });
fs.write('build/index.html', html);