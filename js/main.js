$(function () {

	// Меню гамбургер
	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('nav-menu');
		$('.menu-collapse').toggleClass('menu-opened');
	});

	// Fixed navigation
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700){
			$('.nav').addClass("stirce");
		}
		else{
			$('.nav').removeClass("stirce");
		}
	});

	// Плавная прокрутка

	$(".go").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination}, 1500);
	});


});



















