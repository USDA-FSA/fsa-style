// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.


// Utility method to loop thru NodeList correctly
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

var stickySteps = document.querySelectorAll('.fsa-stepped-control--sticky');

function setComponentStyle() {

  // iterate thru each stepped control on page
  forEach(stickySteps, function(index, value) {
    var _el = value;
  
    var viewportOffset = _el.getBoundingClientRect();   
    var scHeight = _el.offsetHeight;
    var scBottomPosition = window.innerHeight - (viewportOffset.top + scHeight);
    
    if (scBottomPosition > 12) {
      
      if(!_el.classList.contains('fsa-stepped-control--unstuck')){
        _el.classList.add('fsa-stepped-control--unstuck');
      }
    } else {

      if(_el.classList.contains('fsa-stepped-control--unstuck')){
        _el.classList.remove('fsa-stepped-control--unstuck');
      }
    }
  });
}


// check if SC component exists on page
if(stickySteps.length){

  window.addEventListener('scroll', function() {
    setComponentStyle();
  });

  var modal = document.querySelector('.fsa-modal');
  modal.addEventListener("scroll", function(){
    setComponentStyle();
  });

  document.addEventListener("DOMContentLoaded", function(){
    setComponentStyle();
  });

  window.addEventListener('resize', function() {
    setComponentStyle();
  });

}


console.log('SteppedControl loaded, its JS is NOT to be used for Production, demo purposes only');
