import nunjucks from 'nunjucks';
import fs from 'fs-jetpack';
import config from '../bruck.config.js';
import { toCustomProps } from './toCustomProps.js';
import * as child from 'child_process';

child.execSync(`echo "ffffffffffffffffffffffffffffuck a doodle"`);

// Analyze custom elements and create manifest
child.execSync(`npx cem analyze --globs 'elements/**/*'`);

// Convert theme to custom properties
const customProps = toCustomProps(config.theme.tokens);
fs.write('css/lib/tokens.css', customProps);

// Inline and minify CSS
child.execSync(`npx postcss ./css/style.css > ./css/style.min.css`);

// Render index.html using manifest
const manifest = fs.read('custom-elements.json', 'json');
const html = nunjucks.render('bruck.njk', {...config, manifest});

// Write files
fs.copy('elements', 'build/js/elements', { overwrite: true });
fs.copy('css', 'build/css', { overwrite: true });
fs.write('build/index.html', html);