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

// find all checkboxes and set event handler to onchange
selectMultiTriggers.forEach(function (el) {
  el.addEventListener('change', function (e) {

    var _check = e.target;
    var _parent = _check.closest('.fsa-select-multi');
    var _selectAll = _parent.querySelector('[data-behavior~="select-multi-all"]');

    if(_check != _selectAll){

      var _len = _parent.querySelectorAll('[data-behavior~="select-multi"]').length;
      var _lenChecked = _parent.querySelectorAll('[data-behavior~="select-multi"]:checked').length
      var _count = _len - _lenChecked;

      if( _check.checked){
        if(!_selectAll.checked){
          if( _count <= 1 ){
            _selectAll.indeterminate = false;
            _selectAll.checked = true;
          } else {
            _selectAll.indeterminate = true;
            _selectAll.checked = false;
          }
        }
      } else {
        if(_selectAll.checked){
          _selectAll.indeterminate = true;
          _selectAll.checked = false;
        } else if(_count == (_len)) {
          _selectAll.indeterminate = false;
          _selectAll.checked = false;
        }
      }

    } else {
      _parent.querySelectorAll('[data-behavior~="select-multi"]').forEach(function (elem) {
        elem.checked = _selectAll.checked;
      });
      _selectAll.indeterminate = false;
    }

  }, false);
});

function setSelectMultiState(){

  document.querySelectorAll('[data-behavior~="select-multi-all"]').forEach(function (el) {

    var _parent = el.closest('.fsa-select-multi');
    var _selectAll = el;

    var _len = _parent.querySelectorAll('[data-behavior~="select-multi"]').length;
    var _lenChecked = _parent.querySelectorAll('[data-behavior~="select-multi"]:checked').length
    var _count = _len - _lenChecked;

    if( _count <= 1 ){
      _selectAll.indeterminate = false;
      _selectAll.checked = true;
    } else {
      _selectAll.indeterminate = true;
      _selectAll.checked = false;
    }
  });
}

setSelectMultiState();
