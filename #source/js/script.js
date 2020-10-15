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




















