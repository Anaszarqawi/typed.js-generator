import Typed from 'typed.js';
// import $ from 'jquery';

var arrOfChecked = [];

let ElementsChecked = $(':checkbox');
console.log(ElementsChecked);

for (checkbox of ElementsChecked) {
  console.log($(checkbox).is(':checked'));
}

// $('#play').on('click', function (e) {
//   e.preventDefault();
//   console.log('1');
// });
