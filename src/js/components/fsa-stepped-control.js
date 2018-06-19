// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.


// UTILITY METHODS
var getOffsetTop = function (elem) {

	// Set our distance placeholder
	var distance = 0;

	// Loop up the DOM
	if (elem.offsetParent) {
		do {
			distance += elem.offsetTop;
			elem = elem.offsetParent;
		} while (elem);
	}

	// Return our distance
	return distance < 0 ? 0 : distance;
};

//
//
var stickySteps = document.querySelectorAll('.fsa-stepped-control--sticky');

function setComponentStyle() {

  // iterate thru each stepped control on page
  forEach(stickySteps, function(index, value) {
    var _el = value;

    var scBottomPosition = window.innerHeight - (_el.getOffsetTop() + _el.offsetHeight)

    if (scBottomPosition > 12) {
      _el.addClass("fsa-stepped-control--unstuck");
    } else {
      _el.removeClass("fsa-stepped-control--unstuck");
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
