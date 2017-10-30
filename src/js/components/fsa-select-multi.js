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
*/

// find all checkboxes and set event handler to onchange
selectMultiTriggers.forEach(function (el) {
  el.addEventListener('change', function (e) {

    var _check = e.target;
    // set new property checked to true if checked is a property
    var _checked = _check.checked;
    // set new property container to checkboxes parent element
    var _container = _check.parentElement; // should be li element

    // loop thru all checkboxes in container and set properties - indeterminate:false and checked: checked
    var _checkBoxes = _container.querySelectorAll('input[type="checkbox"]');
    Object.keys(_checkBoxes).forEach(function(key){
      _checkBoxes[key].indeterminate = false;
      _checkBoxes[key].checked = _checked;
    });


    // function to checkSiblings that has element passed to it - usually li
    function checkSiblings(el){
      // create new object from elements parent
      //var _parent = el.parentElement;
      var _parent = el.parentElement;

      // set new property of _all to true
      var _all = true;

      // loop thru elements siblings
      var _siblings = getElementSiblings(el);
      // filter elements that are not like el
      var _sibs = Array.prototype.filter.call(_siblings, function(child){
        return child !== _siblings;
      });

      var _len = _sibs.length;
      // check for sibling checkboxes to be equal to clicked checkbox
      // if all not checked, then set _all to false
      for (var j = 0; j < _len; j++) {
        try {
          // set to false if not all children checkboxes checked
          //if( !(_sibs[j].querySelectorAll('input[type="checkbox"]').checked == _checked) ) _all = false;
          if( !(_sibs[j].querySelectorAll('input:checked').length > 0) ) _all = false;
        } catch(err) {
          console.log("catch error" + err);
        }
      }

      //console.log("all checked? "+_all);

      // IF ALL is true && checked is true
      if(_all && _checked ){

        console.log("if(_all && _checked )");

        // find all children checkboxes of the parent element and set their properties - indeterminate:false & checked: checked
        _parent.parentElement.querySelectorAll('input[type="checkbox"]').checked = _checked
        _parent.querySelectorAll('input[type="checkbox"]').indeterminate = true;

        // call checkSiblings and pass in parent element
        checkSiblings(_parent);

      // ELSE IF ALl is true and checked is not true
      } else if(_all && !_checked){

        console.log("else if(_all && !_checked)");

        // find all children checkboxes of the parent element and set their properties - checked: checked
        _parent.querySelectorAll('input[type="checkbox"]').checked = _checked
        _parent.querySelectorAll('input[type="checkbox"]').indeterminate = (_parent.querySelectorAll('input:checked').length > 0);

        checkSiblings(_parent);
      } else {

        console.log("else");

        // check all elements parents and see if they have checkboxes... if so, set properies to - indeterminate:true and checked: false

        var _ancestors = getElementParents(el.parentElement, 'li');

        //console.log("# of _ancestors? "+_ancestors.length);

        for (var n = 0; n < _ancestors.length; n++) {
          try {
            _ancestors[n].querySelector('input[type="checkbox"]').checked = false;
            _ancestors[n].querySelector('input[type="checkbox"]').indeterminate = true;
          } catch(err){
            console.log(" ELSE catch error" + err);
          }
        }

      }
    }

    checkSiblings( _container );

  }, false);
});


function getElementSiblings(elem){
  var sibs = [];
  var sib = elem.parentNode.firstChild;
  for (; sib; sib = sib.nextSibling){
    if(sib.nodeType == 1 && sib !== elem){
      sibs.push(sib);
    }
  }
  return sibs;
}

/**
 * Get all of an element's parent elements up the DOM tree
 * @param  {Node}   elem     The element
 * @param  {String} selector Selector to match against [optional]
 * @return {Array}           The parent elements
 */
function getElementParents( elem, selector ) {
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
    // Setup parents array
    var parents = [];
    // Get matching parent elements
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        // Add matching parents to array
        if ( selector ) {
            if ( elem.matches( selector ) ) {
                parents.push( elem );
            }
        } else {
            parents.push( elem );
        }
    }
    return parents;
};
