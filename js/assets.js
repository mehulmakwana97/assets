+function($) {
  'use strict';
  var assets = function(element, options) {
    this.options = $.extend({}, this.defaults(), options);
    var pItem = this.options.item;

    $('[data-'+ pItem +']').each(function(key, value) {
      var item = $(value).data(pItem);
      var style = {};
      if(item !== '' && item !== undefined) {
        item.split(' ').each(function(ckey, cvalue) {
          var itemTo = ckey.split('-');
          if(itemTo.length > 0) {
            style[pItem + '-' + itemTo[0]] = itemTo[1];
          }
        });

        $(value).removeAttr('data-' + pItem);
        $(value).css(style);
      }
    });
  }

  assets.prototype.defaults = function() {
    return {
      item: 'margin'
    }
  }

  function Plugin(options) {
    return new assets(this, options);
  }

  $.fn.assets = Plugin;
}(jQuery);
