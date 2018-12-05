/* components */
import Image from './components/Image.js';
import Icon from './components/Icon.js';
import Text from './components/Text.js';
import Box from './components/Box.js';
import Spread from './components/Spread.js';
import Cluster from './components/Cluster.js';
import Center from './components/Center.js';
import Screen from './components/Screen.js';
import Go from './components/Go.js';
import Comment from './components/Comment.js';
import Clone from './components/Clone.js';
import Drawer from './components/Drawer.js';
import Flow from './components/Flow.js';
import Line from './components/Line.js';
import Sidebar from './components/Sidebar.js';
import Progress from './components/Progress.js';
import Stack from './components/Stack.js';
import Grid from './components/Grid.js';
import Words from './components/Words.js';

/* actions */
import Actions from './utilities/actions.js';
window.actions = Actions;

/* Paint worker properties */
if ('registerProperty' in CSS) {
  CSS.registerProperty({
    name: '--border-thin',
    syntax: '<length>',
    inherits: true,
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--border-thin")
  });

  CSS.registerProperty({
    name: '--color-dark',
    syntax: '<color>',
    inherits: true,
    initialValue: getComputedStyle(document.documentElement).getPropertyValue("--color-dark")
  });
}

/* Register paint workers */
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('js/houdini/image-cross.js');
}

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
  if (!window.location.hash && document.querySelector('s-creen')) {
    window.location.hash = '#index';
  } else {
    setScreen();
  }
});

window.addEventListener('hashchange', () => {
  setScreen();
});