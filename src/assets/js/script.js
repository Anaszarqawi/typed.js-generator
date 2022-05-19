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
  typeSpeed: 20,
  backSpeed: 50,
  startDelay: 0,
  backDelay: 0,
  fadeOut: true,
  fadeOurClass: 'typed-fade-out',
  fadeOutDelay: 0,
  loop: false,
  loopCount: Infinity,
  shuffle: false,
  smartBackspace: false,
  // autoInsertCss: true,
  // bindInputFocusEvents: false,
  // attr: null,
  // contentType: 'html',
  showCursor: false,
  cursorChar: '|',
};
const defaultOptions = {
  strings: [
    'These are the default values...',
    'You know what you should do?',
    'Use your own!',
    'Have a great day!',
  ],
  // stringsElement: null,
  typeSpeed: 20,
  backSpeed: 50,
  startDelay: 0,
  backDelay: 0,
  fadeOut: false,
  fadeOurClass: 'typed-fade-out',
  fadeOutDelay: 0,
  loop: false,
  loopCount: Infinity,
  shuffle: false,
  smartBackspace: false,
  // autoInsertCss: true,
  // bindInputFocusEvents: false,
  // attr: null,
  // contentType: 'html',
  showCursor: false,
  cursorChar: '|',
};

$(document).ready(function () {
  refreshCode();
  formatCode();
  checkCheckbox();
  rmEmptyDiv();
  var typed = new Typed('.text', options);

  $(document).on('click', '.Stop', function (e) {
    typed.stop();
  });
  $(document).on('click', '.Start', function (e) {
    typed.start();
  });
  $(document).on('click', '.Toggle', function (e) {
    typed.toggle();
  });
  $(document).on('click', '.Reset', function (e) {
    typed.reset();
  });
  $(document).on('click', '.Destroy', function (e) {
    typed.destroy();
  });

  // focus on textarea
  $(document).on('focus', 'input, textarea', function (e) {
    typed.stop();
  });
  $(document).on('focusout', 'input, textarea', function (e) {
    typed.destroy();
    // cloneValues();
    // typed.start();
    typed = new Typed('.text', options);
  });

  $(document).on('click', 'input[type="checkbox"]', function () {
    typed.destroy();
    checkCheckbox();
    cloneValues();
    console.log(options);
    typed = new Typed('.text', options);
  });

  $(':input').on('input', function () {
    refreshCode();
  });
});

const cloneValues = () => {
  let Attributes = $('.attribute');
  let checkboxList = $(':checkbox');
  let checked = [];

  // console.log(checkboxList);

  for (let checkbox of checkboxList) {
    checked.push($(checkbox).is(':checked'));
  }

  if (checked.includes(true)) {
    // typed.destroy();
    console.log(checked.includes(true));
    if (checked[0]) {
      var strings = $(Attributes[0]).find('textarea').val();
      console.log(strings);
      if (strings) {
        options.strings = strings.split('\n');
      } else {
        options.strings = defaultOptions.strings;
        console.log(options.strings);
      }
    } else {
      options.strings = defaultOptions.strings;
    }

    if (checked[1]) {
      options.typeSpeed = +$(Attributes[1]).find('input[type=number]').val();
    } else {
      options.typeSpeed = defaultOptions.typeSpeed;
    }

    if (checked[2]) {
      options.backSpeed = +$(Attributes[2]).find('input[type=number]').val();
    } else {
      options.backSpeed = defaultOptions.backSpeed;
    }

    if (checked[3]) {
      options.startDelay = +$(Attributes[3]).find('input[type=number]').val();
    } else {
      options.startDelay = defaultOptions.startDelay;
    }

    if (checked[4]) {
      options.backDelay = +$(Attributes[4]).find('input[type=number]').val();
    } else {
      options.backDelay = defaultOptions.backDelay;
    }

    options.fadeOut = checked[5];

    if (checked[6]) {
      options.fadeOutDelay = +$(Attributes[6]).find('input[type=number]').val();
    } else {
      options.fadeOutDelay = defaultOptions.fadeOutDelay;
    }

    options.loop = checked[7];

    if (checked[8]) {
      options.loopCount = +$(Attributes[8]).find('input[type=number]').val();
    } else {
      options.loopCount = defaultOptions.loopCount;
    }

    options.shuffle = checked[9];

    options.smartBackspace = checked[10];

    if (checked[11]) {
      options.showCursor = checked[11];
      options.cursorChar = $(Attributes[11]).find('input[type=text]').val();
    } else {
      options.cursorChar = defaultOptions.cursorChar;
      options.showCursor = defaultOptions.showCursor;
    }
  }
};

const checkCheckbox = () => {
  let Attributes = $('.attribute');
  for (const attr of Attributes) {
    const isChecked = $(attr).find('input[type="checkbox"]').is(':checked');
    console.log(isChecked);
    if (isChecked) {
      $(attr).find('input[type="number"], textarea').removeClass('unchecked');
    } else {
      $(attr).find('input[type="number"], textarea').addClass('unchecked');
    }
  }
};

const generateListStrings = () => {
  var strings = '';
  strings += '\n';
  for (const string of options.strings) {
    strings += `    '${string}'\n`;
  }
  return strings;
};

const generateCode = () => {
  return `const options = {
  strings: [${generateListStrings()}  ],
  typeSpeed: ${options.typeSpeed},
  backSpeed: ${options.backSpeed},
  startDelay: ${options.startDelay},
  backDelay: ${options.backDelay},
  fadeOut: ${options.fadeOut},
  fadeOurClass: '${options.fadeOurClass}',
  fadeOutDelay: ${options.fadeOutDelay},
  loop: ${options.loop},
  loopCount: ${options.loopCount},
  shuffle: ${options.shuffle},
  smartBackspace: ${options.smartBackspace},
  showCursor: ${options.showCursor},
  cursorChar: '${options.cursorChar}',
};

typed = new Typed('.text', options);
`;
};

const formatCode = () => {
  document.querySelectorAll('pre[class*=language-]').forEach(function (node) {
    node.classList.add('line-numbers');
  });
  Prism.highlightAll();
};

const refreshCode = () => {
  cloneValues();
  var code = generateCode();
  $('code').text(code);
  formatCode();
};

const rmEmptyDiv = () => {
  var emptyDiv = $('.unit');
  for (const element of emptyDiv) {
    if ($(element).is(':empty')) {
      $(element).remove();
    }
  }
  emptyDiv = $('.content');
  for (const element of emptyDiv) {
    if ($(element).is(':empty')) {
      $(element).remove();
    }
  }
};
