"use strict";
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		adeptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 600,
		easing: 'ease',
		infinite: true,
		waitForAnimate: false,
		asNavFor: ".sliderbig",
		focusOnSelect: true,
	});
	$('.sliderbig').slick({
		fade: true,
		slidesToShow: 1,
		asNavFor: ".slider",
		infinite: true,
		lazyLoad: 'ondemand',
	});
	$('.main-slider-top').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 600,
		autoplay: true,
		autoplaySpeed: 3000,
		easing: 'leinear',
		lazyLoad: 'ondemand',
		adaptiveHeight: true,
	});


	$('.sliderslick').slick({
		arrows: true,
		dots: false,
		adeptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		speed: 600,
		easing: 'ease-in ',
		autoplay: true,
		autoplaySpeed: 2000,
		touchThreshold: 100,
		waitForAnimate: false,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 980,
				settings: {
					arrows: false,
					centerPadding: '40px',
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 760,
				settings: {
					arrows: false,
					centerPadding: '40px',
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 460,
				settings: {
					arrows: false,
					centerPadding: '40px',
					slidesToShow: 1,
				}
			}
		]
	})
});


document.body.style.background = '#ffe3cb';


let color = document.querySelectorAll('.contaner__wrap');

for (let key of color) {
	key.style.background = '#ffe3cb';
}
























