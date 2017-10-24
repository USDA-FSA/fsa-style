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

/*
// iterate thru individual checkboxes and set click handler
selectMultiTriggers.forEach(function (el) {
  el.addEventListener('change', function (e) {
    var _check = e.currentTarget;
    var _parent = _check.closest('.fsa-select-multi');
    var _selectAll = _parent.querySelector('[data-behavior~="select-multi-all"]');
    _selectAll.checked = false;
  }, false);
});
*/

// iterate thru select all checkboxes and set click handler
selectMultiAllTriggers.forEach(function (el) {
  el.addEventListener('change', function (e) {

    var _selectAll = e.target;
    var _parent = _selectAll.closest('.fsa-select-multi');
    var _checks = _parent.getElementsByTagName('input');

    var i, cb;
    for (var i = 0; i < _checks.length; i++) {
      var cb = _checks[i];
      if (cb != _selectAll) {
        if (_selectAll.checked) {
          cb.checked = true;
        } elseif (_selectAll.indeterminate){

        } else {
          cb.checked = false;
        }
      } else {

      }
    }


  }, false);
});

// find all checkboxes and set event handler to onchange
selectMultiTriggers.forEach(function (el) {
  el.addEventListener('change', function (e) {

    var _check = e.currentTarget;
    // set new property checked to true if checked is a property
    _check.checked = "checked";
    //////var _parent = _check.closest('.fsa-select-multi');

    // set new property container to checkboxes parent element
    var _container = _check.parentElement;

    // set new object of all siblings of container
    //////var _sibs = getElementSiblings( _container );

    // loop thru all checkboxes in container and set properties - indeterminate:false and checked: checked

    var _checkBoxes = _container.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < _checkBoxes.length; ++i) {
      _checkBoxes[i].indeterminate = false;
      _checkBoxes[i].checked = "checked";
    }

    // function to checkSiblings that has element passed to it
    function checkSiblings(el)
    {
      // create new object parent from elements parent's parent
      var _parent = el.parentElement.parentElement;

      // set new property of all to true
      var _all = true;

      // loop thru elements siblings
      var _sibs = getElementSiblings(el);
      for (var j = 0; j < _sibs.length; ++j) {
        // set the ALL property to the value of true if checkbox's identity is checked
        if(!_sibs.querySelector('input[type="checkbox"]').checked){
          console.log('it was NOT checked');
          _all = false;
        } else {
          console.log('it was checked');
        }
      }

      //// MORE CODE GOES HERE

    }

    checkSiblings( _parent );

  }, false);
});



    // IF ALL is true && checked is true

      // find all children checkboxes of the parent element and set their properties - indeterminate:false and checked: checked

      // call checkSiblings and pass in parent element

    // ELSE IF ALl is true and checked is not true

      // find all children checkboxes of the parent element and set their properties - checked: checked
      // find all children checkboxes of the parent element and set their properties - indeterminate: findIfParentHasOneOrMoreCheckboxesChecked()

      //// call checkSiblings and pass in parent element


    // ELSE

      // check all elements parents and see if they have checkboxes... if so, set properies to - indeterminate:true and checked: false

    // }


  // call checkSiblings and pass in container




function getElementSiblings(elem){
  var sibs = [];
  var sib = elem.parentNode.firstChild;
  for (; sib; sib = sib.nextSibling){
    if(sib.nodeType !== 1 || sib === elem){
      sibs.push(sib);
    }
  }
  return sibs;
}
