var $ = require('jquery');

function hexc(colorval) {
  var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete(parts[0]);
  for (var i = 1; i <= 3; ++i) {
    parts[i] = parseInt(parts[i]).toString(16);
    if (parts[i].length == 1) parts[i] = '0' + parts[i];
  }
  return '#' + parts.join('');
}

;$(function() {

  var $swatchItem = $('.docs__attr-list__swatch, .docs__swatch-list__item');

  $swatchItem.each(function(index) {

    var $self = $(this)
    var swatchValue = $self.css('backgroundColor');

    if ($self.is('.docs__attr-list__swatch')) {

      var $component = $self.closest('.docs__attr-list__item');
      var $target = $component.find('.docs__attr-list__attr');

      $target.append('<li class="docs__attr-list__attr-item"><code>' + hexc(swatchValue)  + '</code></li>');

    }
    else if ($self.is('.docs__swatch-list__item')) {

      var $component = $self;
      var $target = $component.find('code');

      $target.append('<span class="docs__swatch-list__value">' + hexc(swatchValue)  + '</span>');

    }


  });

// <li class="docs__swatch-list__item">
//   <code>$color-fsa-tertiary</code>
// </li>

});

console.log('ColorDocs loaded, its JS is NOT to be used for Production, demo purposes only');
