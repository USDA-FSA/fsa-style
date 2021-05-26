var $ = window.jQuery = require('jquery');

$('body').on('click', '[data-behavior~="toggle-rwd-size"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.attr('data-target'));
  var $newClass = $self.data('size');
  var $component = $self.closest('[data-component]');

  $target
    .removeClass('docs__rwd-embed--phone docs__rwd-embed--phone-big docs__rwd-embed--tablet docs__rwd-embed--desktop')
    .addClass('docs__rwd-embed--' + $newClass)
  ;

  $self
    .removeClass('fsa-bg:hover--tertiary-100')
    .addClass('fsa-bg--secondary-100')
    .attr('aria-selected', true)
    .siblings()
    .removeClass('fsa-bg--secondary-100')
    .removeAttr('aria-selected')
    .addClass('fsa-bg:hover--tertiary-100')
  ;

})

$('body').on('change', '[data-behavior~="toggle-rwd-table"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.data('target'));
  var $newClass = $self.val();

  $target.toggleClass('fsa-table--responsive-horizontal');

})

console.log('DocsRWD loaded, its JS is NOT to be used for Production, demo purposes only');1
