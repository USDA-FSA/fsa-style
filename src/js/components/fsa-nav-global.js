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


// Disable functionality if class is present
if (document.querySelectorAll('.docs__page').length == 0) {

  var navGlobal__menuItem = document.querySelectorAll('.fsa-nav-global__link--has-sub-menu');
  var navGlobal__main = document.querySelectorAll('.fsa-tophat, .fsa-header-app, #main-content, .fsa-footer');

  // Utility method to loop thru NodeList correctly
  var navGlobal__forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  // Utilitity method
  var navGlobal__getClosest = function (elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }
    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  navGlobal__forEach(navGlobal__main, function (index, value) {
    var _el = value;
    _el.addEventListener('click', function (e) {
      if (document.querySelector('.fsa-nav-global__link[aria-expanded="true"]')) {
        document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
    });
  });

  navGlobal__forEach(navGlobal__menuItem, function (index, value) {
    var _el = value;
    _el.addEventListener('click', function (e) {

      var _self = this;
      var _component = navGlobal__getClosest(_self, '.fsa-nav-global');
      var _listItem = navGlobal__getClosest(_self, '.fsa-nav-global__list-item');
      var _target = _listItem.querySelector('.fsa-nav-global__sub-menu');
      var _currentlyActiveTab = _component.querySelector('.fsa-nav-global__link[aria-expanded="true"]');
      var _currentlyActiveFlyout = _component.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]');
      var _menuState = _self.getAttribute('aria-expanded');
      // $target.classList.add('OUTLINE');

      if (_currentlyActiveTab) {
        _currentlyActiveTab.setAttribute('aria-expanded', 'false');
        _currentlyActiveFlyout.setAttribute('aria-hidden', 'true');
      }

      // TOGGLE MENU ITEM OPENED STATE
      if (_menuState == 'true') {
        // $self.classList.remove('OUTLINE');
        _self.setAttribute('aria-expanded', 'false');
        _target.setAttribute('aria-hidden', 'true');
      } else {
        // $self.classList.add('OUTLINE');
        _self.setAttribute('aria-expanded', 'true');
        _target.setAttribute('aria-hidden', 'false');
      }

      // if ($self.classList.contains('OUTLINE')) {
      //   $self.classList.remove('OUTLINE');
      //   $target.setAttribute('aria-hidden', 'true');
      // } else {
      //   $self.classList.add('OUTLINE');
      //   $target.setAttribute('aria-hidden', 'false');
      // }
      //
    });

    _el.addEventListener('focus', function (e) {
      if (document.querySelector('.fsa-nav-global__link[aria-expanded="true"]')) {
        document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
      console.log('you focused an item');
    });

  });

  console.log('FSA_NAV_GLOBAL loaded, its JS ***not*** to be used for Production');

}
