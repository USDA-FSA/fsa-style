var $ = window.jQuery = require('jquery');

$('body').on('click', '[data-behavior~="toggle-codepen-size"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));
  var $newClass = $self.data('size');
  var $component = $self.closest('[data-component]');

  $target
    .removeClass('docs__codepen-embed--phone docs__codepen-embed--phone-big docs__codepen-embed--tablet docs__codepen-embed--desktop')
    .addClass('docs__codepen-embed--' + $newClass)
  ;

  $self
    .addClass('fsa-btn-group__item--active')
    .attr('aria-selected', true)
    .siblings()
    .removeClass('fsa-btn-group__item--active')
    .removeAttr('aria-selected')
  ;

})


console.log('DocsCodepen loaded, its JS is NOT to be used for Production, demo purposes only');1
