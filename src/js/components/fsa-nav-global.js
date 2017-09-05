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

var menuItem = document.querySelectorAll('.fsa-nav-global__link--has-sub-menu');

menuItem.forEach(function(item) {

  item.onclick = function(e) {

    var $self = this;
    var $component = $self.closest('.fsa-nav-global');
    var $listItem = $self.closest('.fsa-nav-global__list-item');
    var $target = $listItem.querySelector('.fsa-nav-global__sub-menu');

    // $target.classList.add('OUTLINE');

    var menuState = $self.getAttribute('aria-expanded');

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

});

console.log('FSA_NAV_GLOBAL loaded, its JS ***not*** to be used for Production');

// module.exports = FSA_NAV_GLOBAL;
