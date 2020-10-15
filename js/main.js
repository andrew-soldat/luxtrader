
//@prepros-append script.js

$(function () {

	function ibg() {
		$.each($(".ibg"), function(index, val) {
		if ($(this).find("img").length > 0) {
			$(this).css(
				"background-image",
				'url("' +
				$(this)
					.find("img")
					.attr("src") +
				'")'
			);
		}
		});
	}

	ibg();

	// ================================================================================

	$(".slider-main").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});
	$('.control__arrow--next').on('click', function (event) {
		event.preventDefault();
  
		let currentSlider =
		  $(this).parents('.main-block').find('[data-slider="slick"]');
  
		currentSlider.slick('slickNext');
	 });

	 $('.control__arrow--prev').on('click', function (event) {
		event.preventDefault();
  
		let currentSlider =
		  $(this).parents('.main-block').find('[data-slider="slick"]');
  
		currentSlider.slick('slickPrev');
	 });

// ================================================================================

	$(".slider-products").slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 1
			  }
			},
			{
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			 }
		]
	});
	$('.control-products__arrow--next').on('click', function (event) {
		event.preventDefault();

		let arrowSlider =
		$(this).parents('.products').find('[data-slider="products"]');

		arrowSlider.slick('slickNext');
	});

	$('.control-products__arrow--prev').on('click', function (event) {
		event.preventDefault();

		let arrowSlider =
		$(this).parents('.products').find('[data-slider="products"]');

		arrowSlider.slick('slickPrev');
	});

	// ================================================================================

	$(".slider-quotes").slick({
      dots: false,
      arrows: false,
      infinite: true,
		speed: 300,
		fade: true,
  		cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
		adaptiveHeight: true,
	});
	$('.quotes__next').on('click', function (event) {
		event.preventDefault();
  
		let quotesSlider =
		  $(this).parents('.quotes').find('[data-slider="quotes"]');
  
		quotesSlider.slick('slickNext');

		
	 });

	$('.quotes__next').click(function(){
		let degrees = 180,
			angle = $(this).data("angle");
		if (!angle)
		angle = 0;
		angle = +angle + degrees;
		$(this)
		.data("angle", angle)
		.css({ transform: "rotate(" + angle + "deg)"});
	});

// ================================================================================

	$('a[href=""]').click(function(){
		return false;
	});


});


$('.header-menu__icon').click(function(e) {
   $(this).toggleClass('active');
	$('.header__nav').toggleClass('active');
   if($(this).hasClass('active')) {
      $('body').data('scroll',$(window).scrollTop());
   }
      $('body').toggleClass('lock');
   if(!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
   }
});

$('.header-search').click(function(e) {
	$('.header-search__input').toggleClass('active');
});

// ================================================================================

$('.user-menu__icon').click(function(event) {
	$('.user-menu__list').toggleClass('active');
});



$('.header-search').click(function(event) {
	$('.form').addClass('active');
});

// ================================================================================

$(document).mouseup(function(e) {
	if (!e.target.closest('.user-menu')) {
		$('.user-menu__list').removeClass('active');
	}
});

$(document).mouseup(function(e) {
	if (!e.target.closest('.form')) {
		$('.form').removeClass('active');
	}
});





















