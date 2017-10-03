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
var firstTabStop;
var lastTabStop;

var triggers = document.querySelectorAll('[data-behavior~="open-modal"]');
var closeButtons = document.querySelectorAll('[data-behavior~="close-modal"]');

// iterate thru trigger elements and set click handler
triggers.forEach( function(el) {
  el.addEventListener('click', function(e){
    // set private variables
    var _trigger = e.target;
    var _id = _trigger.getAttribute('data-target');
    // assign classes and aria
    _trigger.setAttribute('aria-expanded', 'true');
    _trigger.setAttribute('data-modal-origin','');
    // pass associated modal to method
    showModal( document.getElementById(_id) );
  }, false);
});

// iterate thru close buttons and set click handler
closeButtons.forEach( function(el) {
  el.addEventListener('click', function(e){
    // pass associated modal to method
    closeModal( e.currentTarget.closest('.fsa-modal') );
  }, false);
});

function showModal(m){

  var _modal = m;
  _modal.setAttribute('aria-hidden', 'false');

  // trap tabs inside of modal
  _modal.addEventListener('keydown', trapTab);
  // Find all focusable children

  var _focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  var _focusableElements = _modal.querySelectorAll(_focusableElementsString);

  // Convert NodeList to Array
  _focusableElements = Array.prototype.slice.call(_focusableElements);

  firstTabStop = _focusableElements[0];
  lastTabStop = _focusableElements[_focusableElements.length - 1];
  firstTabStop.focus();

  // show the modal by setting active class
  _modal.className = _modal.className + ' fsa-modal--active';

  // gain focus --- needs rewrite
  setTimeout(function() {
    _modal.focus();
  }, 200);
}


function closeModal(m){

  var _modal = m;

  // hide the modal
  _modal.className = _modal.className.replace(' fsa-modal--active','');
  _modal.setAttribute('aria-hidden', 'true');

  // set focus back to the originating element
  var _origin = document.querySelector('[data-modal-origin]');
  _origin.removeAttribute('data-modal-origin');
  _origin.setAttribute('aria-expanded', 'false');
  _origin.focus();
}

//utility method to trap keys
function trapTab(e){
  // Check for TAB key press
  if (e.keyCode === 9) {
    // SHIFT + TAB
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    // TAB
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }
  // ESCAPE
  if (e.keyCode === 27) {
    closeModal();
  }
}
