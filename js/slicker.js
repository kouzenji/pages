// JavaScript Document
$(document).ready(function(){
	$('.slide-class').slick({
		dots: false,
		autoplay: false,
		prevArrow: '<div class="Sarrow Aprev"></div>',
        nextArrow: '<div class="Sarrow Anext"></div>'
	});
	
	$('.Anext').click(function(){
		$(this).toggleClass('active');
	setTimeout(function(){
		$('.Anext').removeClass('active')}, 1000);
		 });
});
