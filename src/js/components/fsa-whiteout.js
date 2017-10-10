// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var whiteoutShow = document.querySelectorAll('[data-behavior~="whiteout-show"]');
var whiteoutDismiss = document.querySelectorAll('[data-behavior~="whiteout-dismiss"]');

// iterate thru close buttons and set click handler
whiteoutShow.forEach( function(el) {
  el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'false');
    _whiteout.setAttribute('aria-expanded', 'false');
  }, false);
});

whiteoutDismiss.forEach( function(el) {
  el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'true');
    _whiteout.setAttribute('aria-expanded', 'true');
  }, false);
});
