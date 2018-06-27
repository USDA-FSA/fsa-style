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

var spinbox__triggers = document.querySelectorAll('[data-behavior~="spinbox-spin"]');

// Utility method to loop thru NodeList correctly
var spinbox__forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// Utility method to find parent
var spinbox__getClosest = function(elem, selector){

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get the closest matching element
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;

};

// Utility method to query if element has a class
var spinbox__hasClass = function(el, classname) {
  return (' ' + el.className + ' ').indexOf(' ' + classname + ' ') > -1;
}

// iterate thru trigger elements and set click handler
spinbox__forEach(spinbox__triggers, function (index, value) {

  var _el = value;

  _el.addEventListener('click', function(e){

    var _component = spinbox__getClosest(e.currentTarget, '.fsa-spinbox');
    var _target = _component.querySelector('.fsa-spinbox__input');

    if (spinbox__hasClass(_el, 'fsa-spinbox__btn--decrement')){
      _target.stepDown();
      console.log('Spinbox decremented');
    }
    else {
      _target.stepUp();
      console.log('Spinbox incremented');
    }

  }, false);

});

console.log('Spinbox loaded, its JS is NOT to be used for Production, demo purposes only');
