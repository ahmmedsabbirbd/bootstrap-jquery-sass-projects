$('documnet').ready(function() {
  
 	new WOW().init(); /*wow start*/

	$('.slick').slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true
	}); 
});