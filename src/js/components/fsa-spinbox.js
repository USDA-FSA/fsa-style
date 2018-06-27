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

var ieIE_10_down = (function() { if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) { return parseFloat( RegExp.$1 ); } else { return false; } })();
var isIE_11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;

// What gets clicked?
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

// Iterate thru trigger elements and set click handler
spinbox__forEach(spinbox__triggers, function (index, value) {

  var _el = value;

  _el.addEventListener('click', function(e){

    var _component = spinbox__getClosest(e.currentTarget, '.fsa-spinbox');
    var _target = _component.querySelector('.fsa-spinbox__input'); // Which form element in this component will be updated with new value?
    var _targetStepAmount = _target.getAttribute('step'); // By how much will we increment/decrement?

    if (_targetStepAmount == null) {
      // If step attribute doesn't exist, the default value is "1"
      _targetStepAmount = 1;
    }

    // For Demo purposes, we're only demo'ing in browsers that *natively* support stepUp() and stepDown()
    if (ieIE_10_down || isIE_11) { // lazily targeting IE 11 and below. For all I know it works above IE 11
      // Just alert() some basic helpfup info
      alert('Step up/down by ' + _targetStepAmount);
    }
    else {
      if (spinbox__hasClass(_el, 'fsa-spinbox__btn--decrement')){
        // If you click the "Down" button SUBTRACT the step value from the current value
        _target.stepDown();
        console.log('Spinbox decremented');
      }
      else {
        // If you click the "Up" button ADD the step value from the current value
        _target.stepUp();
        console.log('Spinbox incremented');
      }
    }

  }, false);

});

console.log('Spinbox loaded, its JS is NOT to be used for Production, demo purposes only');
