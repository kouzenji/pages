// JavaScript Document
$(document).ready(function(){
	$('.slide-class1').slick({
		dots: false,
		autoplay: false,
		prevArrow: '<div class="Sarrow Aprev"></div>',
        nextArrow: '<div class="Sarrow Anext1"></div>'
	});
	$('.slide-class2').slick({
		dots: false,
		autoplay: false,
		prevArrow: '<div class="Sarrow Aprev"></div>',
        nextArrow: '<div class="Sarrow Anext2"></div>'
	});
	$('.slide-class3').slick({
		dots: false,
		autoplay: false,
		prevArrow: '<div class="Sarrow Aprev"></div>',
        nextArrow: '<div class="Sarrow Anext3"></div>'
	});
	$('.slide-class4').slick({
		dots: false,
		autoplay: false,
		prevArrow: '<div class="Sarrow Aprev"></div>',
        nextArrow: '<div class="Sarrow Anext4"></div>'
	});
	
	$('.Anext1').click(function(){
		$(this).removeClass('active');
	setTimeout(function(){
		$(this).toggleClass('active')});
	});
	$('.Anext2').click(function(){
		$(this).removeClass('active');
	setTimeout(function(){
		$(this).toggleClass('active')});
	});
	$('.Anext3').click(function(){
		$(this).removeClass('active');
	setTimeout(function(){
		$(this).toggleClass('active')});
	});
	$('.Anext4').click(function(){
		$(this).removeClass('active');
	setTimeout(function(){
		$(this).toggleClass('active')});
	});
	
	$(".slide-class1").on("beforeChange", function() {
		$('.Anext1').removeClass('active');
	setTimeout(() => {    
		$('.Anext1').addClass('active');
		});
	})
	$(".slide-class2").on("beforeChange", function() {
		$('.Anext2').removeClass('active');
	setTimeout(() => {    
		$('.Anext2').addClass('active');
		});
	})
	$(".slide-class3").on("beforeChange", function() {
		$('.Anext3').removeClass('active');
	setTimeout(() => {    
		$('.Anext3').addClass('active');
		});
	})
	$(".slide-class4").on("beforeChange", function() {
		$('.Anext4').removeClass('active');
	setTimeout(() => {    
		$('.Anext4').addClass('active');
		});
	})
});
