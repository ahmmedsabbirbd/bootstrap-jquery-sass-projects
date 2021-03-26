$('documnet').ready(function() { 
	$('.business').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	}); 

	 $('.navbar-toggler').sidr({
        name: 'asidr-main',
        source: '#asidr',
        displace: false,
        renaming: false,
        side: 'right',
    });

    $('.sidr-close').on('click', function(){
        $.sidr('close', 'asidr-main');
    });

    $('body').swipe( {
        swipeRight: function () {
            $.sidr('close', 'asidr-main');
            $('.show-overly').removeClass('active');
        }, 
        swipeLeft: function () {
            $.sidr('open', 'asidr-main');
            $('.show-overly').addClass('active')
        },
        threshold: 45
    }); 

    $('.navbar-toggler').on('click',function(){
        $('.show-overly').addClass('active');
    });/*add-class overly*/

    $('.sidr-close').on('click',function(){
        $('.show-overly').removeClass('active');
    });/*remove-class overly*/

});