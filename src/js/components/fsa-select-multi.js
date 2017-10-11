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
var selectMultiTriggers = document.querySelectorAll('[data-behavior~="select-multi"]');
var selectMultiAllTriggers = document.querySelectorAll('[data-behavior~="select-multi-all"]');

// iterate thru individual checkboxes and set click handler
selectMultiTriggers.forEach( function(el) {
  el.addEventListener('change', function(e){
    var _check = e.currentTarget;
    var _parent = _check.closest('.fsa-select-multi');
    var _selectAll = _parent.querySelector('[data-behavior~="select-multi-all"]');
    _selectAll.checked = false;
  }, false);
});

// iterate thru select all checkboxes and set click handler
selectMultiAllTriggers.forEach( function(el) {
  el.addEventListener('change', function(e){
    var _selectAll = e.target;
    var _parent = _selectAll.closest('.fsa-select-multi');
    var _checks = _parent.getElementsByTagName('input');

    var i, j;
    for (var i = 0; i < _checks.length; i++){
      var j = _checks[i];
      if(j!=_selectAll){
        if( _selectAll.checked ){
          j.checked = true;
        } else {
          j.checked = false;
        }
      }
    }
  }, false);
});
