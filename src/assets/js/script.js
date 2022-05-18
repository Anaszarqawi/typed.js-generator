import Typed from 'typed.js';
import $ from 'jquery';

const options = {
  strings: [
    'These are the default values...',
    'You know what you should do?',
    'Use your own!',
    'Have a great day!',
  ],
  // stringsElement: null,
  typeSpeed: 0,
  backSpeed: 0,
  startDelay: 0,
  backDelay: 700,
  fadeOut: false,
  // fadeOurClass: 'typed-fade-out',
  fadeOutDelay: 0,
  loop: false,
  loopCount: Infinity,
  shuffle: false,
  smartBackspace: true,
  // autoInsertCss: true,
  // bindInputFocusEvents: false,
  // attr: null,
  // contentType: 'html',
  showCursor: true,
  cursorChar: '|',
};

const MySettings = {};

// eslint-disable-next-line no-unused-vars
$(document).ready(function () {
  new Typed('.text', options);
});

$(document).on('input', 'input', () => {
  $('.typed-cursor').remove();
  let Attributes = $('.attribute');
  let checkboxList = $(':checkbox');
  let checked = [];

  // console.log(checkboxList);

  for (let checkbox of checkboxList) {
    checked.push($(checkbox).is(':checked'));
  }
  // console.log(checked);

  if (checked[0]) {
    options.strings = $(Attributes[0]).find('textarea').val().split('\n');
  }
  if (checked[1]) {
    options.typeSpeed = +$(Attributes[1]).find('input[type=number]').val();
  }
  if (checked[2]) {
    options.backSpeed = +$(Attributes[2]).find('input[type=number]').val();
  }
  if (checked[3]) {
    options.startDelay = +$(Attributes[3]).find('input[type=number]').val();
  }
  if (checked[4]) {
    options.backDelay = +$(Attributes[4]).find('input[type=number]').val();
  }
  if (checked[5]) {
    options.fadeOut = checked[5];
  }
  if (checked[6]) {
    options.fadeOutDelay = +$(Attributes[6]).find('input[type=number]').val();
  }
  if (checked[7]) {
    options.loop = checked[7];
  }
  if (checked[8]) {
    options.loopCount = +$(Attributes[8]).find('input[type=number]').val();
  }
  if (checked[9]) {
    options.shuffle = checked[9];
  }
  if (checked[10]) {
    options.smartBackspace = checked[10];
  }
  if (checked[11]) {
    options.showCursor = checked[11];
  }
  if (checked[12]) {
    options.cursorChar = $(Attributes[12]).find('input[type=text]').val();
  }

  console.log(options);
  new Typed('.text', options);

  // // console.log(Attributes[0]);

  // for (const attr of Attributes) {
  //   if (attr.find('input[type=checkbox]')) {

  //   }

  // }
  // options.typeSpeed = $(Attributes[0]).find('');
});
