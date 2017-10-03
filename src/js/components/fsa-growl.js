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

var triggers = document.querySelectorAll('[data-behavior~="growl-show"]');
var closeButtons = document.querySelectorAll('[data-behavior~="growl-dismiss"]');
var closeButtonsDelay = document.querySelectorAll('[data-behavior~="growl-dismiss-delay"]');

// iterate thru trigger elements and set click handler
triggers.forEach( function(el) {
  el.addEventListener('click', function(e){

    // set private variables
    var _trigger = e.target;
    var _id = _trigger.getAttribute('data-target');

    // pass associated growl to method
    showGrowl( document.getElementById(_id) );
  }, false);
});

// iterate thru close buttons and set click handler
closeButtons.forEach( function(el) {
  el.addEventListener('click', function(e){
    // pass associated growl to method
    dismissGrowl( e.currentTarget.closest('.fsa-growl') );
  }, false);
});

// iterate thru close buttons and set click handler
closeButtonsDelay.forEach( function(el) {
  el.addEventListener('click', function(e){
    // pass associated growl to method
    dismissGrowl( e.currentTarget.closest('.fsa-growl') );
  }, false);
});

function showGrowl(g){

  var _growl = g;
  //_growl.setAttribute('aria-hidden', 'false');
  _growl.className = _growl.className.replace(' fsa-growl--hidden','');

  var _growlContainer = _growl.parentNode;
  _growlContainer.className = _growlContainer.className.replace(' fsa-growl-container--hidden','');
}


function dismissGrowl(g){

  var _growl = g;
  _growl.className = _growl.className + ' fsa-growl--dismissing';

  setTimeout(function() {
    _growl.className = _modal.className.replace(' fsa-growl--dismissing',' fsa-growl--hidden');
  }, 250);
}

function dismissGrowlDelay(g){

  var _growl = g;

  setTimeout(function() {
    _growl.className = _growl.className + ' fsa-growl--dismissing';

    setTimeout(function() {
      _growl.className = _modal.className.replace(' fsa-growl--dismissing',' fsa-growl--hidden');
    }, 500);

  }, 3500);
}
