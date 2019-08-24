$(document).ready(function() {

  $('.menu-order').click(function(event) {
    /* Act on the event */
    // $(this).addClass('active');
  $(this).toggleClass('active');
  });

  $('.love').click(function(event) {
    /* Act on the event */
    // $(this).addClass('active');
  $(this).toggleClass('active1');
  });

  $('.top a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
    }, 1000);
   });

  $("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#list").slideToggle();

  });

});