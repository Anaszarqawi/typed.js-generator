import Typed from 'typed.js';
import $ from 'jquery';

const options = {
  strings: [
    'These are the default values...',
    'You know what you should do?',
    'Use your own!',
    'Have a great day!',
  ],
  stringsElement: null,
  typeSpeed: 0,
  startDelay: 0,
  backSpeed: 0,
  backDelay: 700,
  fadeOut: false,
  fadeOurClass: 'typed-fade-out',
  fadeOutDelay: 500,
  cursorChar: '|',
  showCursor: true,
  autoInsertCss: true,
  bindInputFocusEvents: false,
  smartBackspace: true,
  attr: null,
  contentType: 'html',
  loop: false,
  loopCount: Infinity,
  shuffle: false,
};

// eslint-disable-next-line no-unused-vars
$(document).ready(function () {
  var typed = new Typed('.text', options);
});
