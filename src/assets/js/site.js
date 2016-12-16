---
---

{% include_relative _partials/jquery.unveil.js %}

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