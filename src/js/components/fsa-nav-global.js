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

var $menuItem = document.querySelectorAll('.fsa-nav-global__link--has-sub-menu');
var $main = document.querySelectorAll('.fsa-tophat, .fsa-header-app, #main-content, .fsa-footer');

$main.forEach(function(el) {

  el.onclick = function(e) {

    if (document.querySelector('.fsa-nav-global__link[aria-expanded="true"]')) {
      document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
      document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
    }

  }

});

$menuItem.forEach(function(item) {

  item.onclick = function(e) {

    var $self = this;
    var $component = $self.closest('.fsa-nav-global');
    var $listItem = $self.closest('.fsa-nav-global__list-item');
    var $target = $listItem.querySelector('.fsa-nav-global__sub-menu');
    var $currentlyActiveTab = $component.querySelector('.fsa-nav-global__link[aria-expanded="true"]');
    var $currentlyActiveFlyout = $component.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]');
    var menuState = $self.getAttribute('aria-expanded');

    // $target.classList.add('OUTLINE');

    if ($currentlyActiveTab) {
      $currentlyActiveTab.setAttribute('aria-expanded', 'false');
      $currentlyActiveFlyout.setAttribute('aria-hidden', 'true');
    }

    // TOGGLE MENU ITEM OPENED STATE
    if (menuState == 'true') {
      // $self.classList.remove('OUTLINE');
      $self.setAttribute('aria-expanded', 'false');
      $target.setAttribute('aria-hidden', 'true');
    } else {
      // $self.classList.add('OUTLINE');
      $self.setAttribute('aria-expanded', 'true');
      $target.setAttribute('aria-hidden', 'false');
    }

    // if ($self.classList.contains('OUTLINE')) {
    //   $self.classList.remove('OUTLINE');
    //   $target.setAttribute('aria-hidden', 'true');
    // } else {
    //   $self.classList.add('OUTLINE');
    //   $target.setAttribute('aria-hidden', 'false');
    // }
    //
  }

  item.onfocus = function(e) {
    if (document.querySelector('.fsa-nav-global__link[aria-expanded="true"]')) {
      document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
      document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
    }
    console.log('you focused an item');
  }

});

console.log('FSA_NAV_GLOBAL loaded, its JS ***not*** to be used for Production');

// module.exports = FSA_NAV_GLOBAL;
