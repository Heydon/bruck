/* Components */
import Image from './components/Image.js';
import Text from './components/Text.js';
import Stack from './components/Stack.js';
import Grid from './components/Grid.js';

/* Paint worker properties */
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--border-thin-h',
    syntax: '<length>',
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--border-thin")
  });

  CSS.registerProperty({
    name: '--color-dark-h',
    syntax: '<color>',
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--color-dark")
  });
}

/* Register paint workers */
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('js/houdini/image-cross.js');
}