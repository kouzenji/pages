// JavaScript Document
// Popup Window
var scrollTop = '';
var newHeight = '100';
 
$(window).bind('scroll', function() {
  scrollTop = $( window ).scrollTop();
  newHeight = scrollTop + 100;
});
 
$('.popup-trigger').click(function(e) {
  e.stopPropagation();
    $('.popup').hide();
    $(this).nextAll('.popup:first').css('top', newHeight).toggle();
});
 
$('html').click(function() {
  $('.popup').hide();
});
 
$('.popup-btn-close').click(function(e){
  $(this).parent().hide();
});
 
$('.popup').click(function(e){
  e.stopPropagation();
});