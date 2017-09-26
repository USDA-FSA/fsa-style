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

var $triggers = document.querySelectorAll('[data-behavior~="open-modal"]');
var $closeButtons = document.querySelectorAll('[data-behavior~="close-modal"]');

// iterate thru trigger elements and set click handler
$triggers.forEach( function(el) {
  el.addEventListener('click', showModal, false);
});

// iterate thru close buttons and set click handler
$closeButtons.forEach( function(el) {
  el.addEventListener('click', closeModal, false);
});


function showModal(t){

  // set trigger and change attributes
  $trigger = t.target;
  $trigger.setAttribute('aria-expanded', 'true');
  $trigger.setAttribute('data-modal-origin','');

  // set modal and change attributes
  $id = $trigger.getAttribute('data-target');
  $modal = document.getElementById($id);
  $modal.setAttribute('aria-hidden', 'false');
  // show the modal by setting active class
  $modal.className = $modal.className + ' fsa-modal--active';

  // gain focus --- needs rewrite
  setTimeout(function() {
    $modal.focus();
  }, 200);
}


function closeModal(b){

  // find modal parent of close button using fsa class
  $closeBtn = b.currentTarget;
  $modal = $closeBtn.closest('.fsa-modal');

  // hide the modal
  $modal.className = $modal.className.replace(' fsa-modal--active','');
  $modal.setAttribute('aria-hidden', 'true');

  // set focus back to the originating element
  $origin = document.querySelector('[data-modal-origin]');
  $origin.removeAttribute('data-modal-origin');
  $origin.setAttribute('aria-expanded', 'false');
  $origin.focus();
}
