// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var $ = window.jQuery = require('jquery');

$('body').on('click', '[data-behavior~="spinbox"]', function(event) {

  $self = $(this);
  $component = $self.closest('.fsa-spinbox');
  $target = $component.find('.fsa-spinbox__input');

  currentValue = parseFloat($target.val());
  stepAmt = parseFloat($target.attr('step'));

  console.log('"currentValue" is ' + currentValue + ' and "stepAmt" is ' + stepAmt);

  if ($self.hasClass('fsa-spinbox__btn--increment')) {
    newAdjAmt = currentValue + stepAmt;
    $target.val(newAdjAmt.toFixed(2)).trigger('change');
  } else { // fsa-spinbox__btn--decrement
    newAdjAmt = currentValue - stepAmt;
    $target.val(newAdjAmt.toFixed(2)).trigger('change');
  }

})

console.log('Spinbox loaded, its JS is NOT to be used for Production, demo purposes only');
