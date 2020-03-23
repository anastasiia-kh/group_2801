import {
  initSlider
} from './slideshow.js';
import {
  createPager
} from './pager.js';
initSlider();

const body = document.querySelector('body');
const sendMessage = i => {
  alert('Hello, ' + i);
}
createPager(body, 10, sendMessage);