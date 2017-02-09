+function($) {
  'use strict';
  var assets = function(element, options) {
    this.options = $.extend({}, this.defaults(), options);
    var pItem = this.options.item;

    $('[data-'+ pItem +']').each(function(key, value) {
      var item = $(value).data(pItem);
      var style = {};
      if(item !== '' && item !== undefined) {
        var mItems = item.split(' ');
        $.each(mItems, function(ckey, cvalue) {
          var itemTo = cvalue.split('-');
          if(itemTo.length > 0) {
            if(itemTo[1] !== undefined)
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
