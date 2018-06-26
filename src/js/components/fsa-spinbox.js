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
  $component = $self.closest('.pcp-spinbox');
  $target = $component.find('.pcp-spinbox__input');

  currentValue = parseFloat($target.val());
  stepAmt = parseFloat($target.attr('step'));

  console.log('"currentValue" is ' + currentValue + ' and "stepAmt" is ' + stepAmt);

  if ($self.hasClass('pcp-spinbox__btn--increment')) {
    newAdjAmt = currentValue + stepAmt;
    $target.val(newAdjAmt.toFixed(2)).trigger('change');
  } else { // pcp-spinbox__btn--decrement
    newAdjAmt = currentValue - stepAmt;
    $target.val(newAdjAmt.toFixed(2)).trigger('change');
  }

})

$('body').on('focus', '.pcp-spinbox__input', function(event) {

  var $self = $(this);
  var $component = $self.closest('.pcp-adjust__spinbox');

  $component.addClass('pcp-adjust__spinbox--focused');

  console.log('spinbox focused');

})

$('body').on('keydown', '.pcp-spinbox__input[data-behavior~="spinbox-kill-keypress"]', function(e) {

  if (event.which == 39) {
    console.log('You pressed RIGHT arrow key');
  } else if (event.which == 37) {
    console.log('You pressed LEFT arrow key');
  } else if (event.which == 38) {
    console.log('You pressed UP arrow key');
  } else if (event.which == 40) {
    console.log('You pressed DOWN arrow key');
  } else if (event.which == 9) {
    console.log('You pressed TAB key');
  } else {
    e.preventDefault();
  }

})

$('body').on('blur', '.pcp-spinbox__input, .pcp-spinbox__btn', function(event) {

  var $self = $(this);
  var $component = $self.closest('.pcp-adjust__spinbox');
  var $spinButtons = $component.find('.pcp-spinbox__btn');

  // This use of setTimeoutis definitely a hack, you'll want to make it smarter.
  setTimeout(function() {
    if ($spinButtons.is(':focus')) {
      $component.addClass('pcp-adjust__spinbox--focused');
    }
    else {
      $component.removeClass('pcp-adjust__spinbox--focused');
    }
  }, 10);

})

$('body').on('change', '[data-behavior~="spinbox-demo-change"]', function(event) {

  // ---------------------------------------------------------------------------
  var $self = $(this);
  var $row = $self.closest('tr');

  // ---------------------------------------------------------------------------
  currentChg = $row.find('.pcp-adjust__change-value');
  stepAmt = parseFloat($self.attr('step'));
  currentChgAmt = parseFloat(currentChg.html());

  if ($.isNumeric(currentChgAmt)) {
    newChgAmt = currentChgAmt + stepAmt;
  } else {
    newChgAmt = 0 + stepAmt;
  }

  if (newChgAmt == '0') {
    currentChg.html('');
  } else {
    currentChg.html(newChgAmt.toFixed(2));
  }

  // ---------------------------------------------------------------------------
  thisAmt = parseFloat($self.val()).toFixed(2);

  if ($.isNumeric(thisAmt)) {
    $self.val(thisAmt);
    console.log('yup, IS a number');
  } else {
    $self.val('0.00');
    console.log('nope, NOT a number');
  }

});


console.log('Spinbox loaded, its JS is NOT to be used for Production, demo purposes only');
