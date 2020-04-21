// import {
//   Lamp,
// } from './lamp.js'
// import {
//   Switcher
// } from './switcher.js'
import {
  Lighter
} from './lighter.js';

const body = document.querySelector('body');
const myLighter = new Lighter(body)

myLighter.render()

window.myTestSwitcher = myLighter;