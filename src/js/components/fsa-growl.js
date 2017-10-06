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

var growlFirstTabStop;
var growlLastTabStop;

var growlTriggers = document.querySelectorAll('[data-behavior~="growl-show"]');
var growlCloseButtons = document.querySelectorAll('[data-behavior~="growl-dismiss"]');
var growlCloseButtonsDelay = document.querySelectorAll('[data-behavior~="growl-dismiss-delay"]');

// iterate thru trigger elements and set click handler
growlTriggers.forEach( function(el) {
  el.addEventListener('click', function(e){

    // set private variables
    var _trigger = e.target;
    var _id = _trigger.getAttribute('aria-controls');

    // assign classes and aria
    _trigger.setAttribute('aria-expanded', 'true');
    _trigger.setAttribute('data-growl-origin','');

    // pass associated growl to method
    showGrowl( document.getElementById(_id) );
  }, false);
});

// iterate thru close buttons and set click handler
growlCloseButtons.forEach( function(el) {
  el.addEventListener('click', function(e){
    // pass associated growl to method
    dismissGrowl( e.currentTarget.closest('.fsa-growl') );
  }, false);
});

// iterate thru close buttons and set click handler
/*
growlCloseButtonsDelay.forEach( function(el) {
  el.addEventListener('click', function(e){
    // pass associated growl to method
    dismissGrowl( e.currentTarget.closest('.fsa-growl') );
  }, false);
});
*/

function showGrowl(g){

  var _growl = g;
  _growl.setAttribute('aria-hidden', 'false');

  // if growl uses modal style
  if( hasClass(_growl, 'fsa-growl--centered') ){
     var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden','false');

    // trap tabs inside of modal
    _growl.addEventListener('keydown', growlTrapTab);
    // Find all focusable children
    var _focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var _focusableElements = _growl.querySelectorAll(_focusableElementsString);

    // Convert NodeList to Array
    _focusableElements = Array.prototype.slice.call(_focusableElements);

    growlFirstTabStop = _focusableElements[0];
    growlLastTabStop = _focusableElements[_focusableElements.length - 1];
    growlFirstTabStop.focus();

    // gain focus --- needs rewrite
    setTimeout(function() {
      _growl.focus();
    }, 200);

  }
}


function dismissGrowl(g){

  var _growl = g;
  _growl.setAttribute('aria-hidden', 'true');

  setTimeout(function() {
    _growl.className = _growl.className.replace(' fsa-growl--dismissing','');

    var _origin = document.querySelector('[data-growl-origin]');
    _origin.removeAttribute('data-growl-origin');
    _origin.setAttribute('aria-expanded', 'false');

    // if growl uses modal style
    if( hasClass(_growl, 'fsa-growl--centered') ){
      // set focus back to the originating element
      _origin.focus();

       var _whiteout = document.getElementById('fsa-whiteout');
      _whiteout.setAttribute('aria-hidden','true');
    }

  }, 250);

}

//utility method to trap keys
function growlTrapTab(e){
  // Check for TAB key press
  if (e.keyCode === 9) {
    // SHIFT + TAB
    if (e.shiftKey) {
      if (document.activeElement === growlFirstTabStop) {
        e.preventDefault();
        growlLastTabStop.focus();
      }
    // TAB
    } else {
      if (document.activeElement === growlLastTabStop) {
        e.preventDefault();
        growlFirstTabStop.focus();
      }
    }
  }
  // ESCAPE
  if (e.keyCode === 27) {
    dismissGrowl();
  }
}

function hasClass(el, classname) {
  console.log('~~~ '+ classname);
  return (' ' + el.className + ' ').indexOf(' ' + classname + ' ') > -1;
}
