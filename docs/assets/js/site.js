;(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);

$(document).ready(function() {
  $('.lazy').unveil(240,function() {
    $(this).load(function() {
      $(this).parent().addClass('loaded');
    } );
  });
});

$('#add__guests').click(function() {
  $('#guests').toggleClass('is__hidden');
});

$('#add__flights').click(function() {
  $('#additional-flights').toggleClass('is__hidden');
});

$('.can__remove').click(function() {
  $(this).parent().parent().toggleClass('is__hidden');
});

$('.buy__tab').click(function() {
  $('.buy__tab.is__active').removeClass('is__active');
  $(this).addClass('is__active');
});

$('#grab-go').click(function() {
  $('#flights').removeClass('is__hidden');
});

$('#frequent-flyer').click(function() {
  $('#flights, #additional-flights').addClass('is__hidden');
});

$('.has--info svg').click(function() {
  $(this).parent().toggleClass('has--info-shown');
});