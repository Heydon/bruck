/* Components */
import Image from './components/Image.js';
import Text from './components/Text.js';
import Stack from './components/Stack.js';
import Grid from './components/Grid.js';
import Box from './components/Box.js';
import Spread from './components/Spread.js';
import Cluster from './components/Cluster.js';
import Center from './components/Center.js';
import Screen from './components/Screen.js';
import Repeat from './components/Repeat.js';
import Comment from './components/Comment.js';
import Clone from './components/Clone.js';

/* Paint worker properties */
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--border-thin',
    syntax: '<length>',
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--border-thin")
  });

  CSS.registerProperty({
    name: '--color-dark',
    syntax: '<color>',
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--color-dark")
  });
}

/* Register paint workers */
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('js/houdini/image-cross.js');
}

/* TODO: abstract check for existing screen 
into function and use on page load to set current on the existing hash too */

/* Handle <s-creen> elements on hash change */
const screens = document.querySelectorAll('s-creen');
const setScreen = () => {
  let screen = Array.prototype.find.call(screens, s => {
    return s.id === window.location.hash.substring(1);
  });
  if (screen) {
    Array.prototype.forEach.call(screens, s => {
      s.removeAttribute('current');
    });
    screen.setAttribute('current', 'current');
  }
}

window.addEventListener('load', () => {
  if (!window.location.hash) {
    window.location.hash = '#index';
  } else {
    setScreen();
  }
});

window.addEventListener('hashchange', () => {
  setScreen();
});