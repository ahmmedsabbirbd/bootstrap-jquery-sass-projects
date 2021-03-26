$('documnet').ready(function() {

  new WOW().init(); /*wow start*/

  $('.corporate').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }); 

    $('.navbar-toggler').sidr({
        side: 'right',
        renaming: false,
        displace: false,
        source: '#asidr',
        name: 'asidr-main',
    });/*sidr-option*/

    $('.sidr-close').on('click', function(){
        $.sidr('close', 'asidr-main');
    });/*sidr-open*/

   /* 
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
    */
    $('.navbar-toggler').on('click',function(){
        $('.show-overly').addClass('active');
    });/*sidr-overly-open*/

    $('.search-triger').on('click',function(){
        $('.search-bar, .show-overly').addClass('active');
    });/*search-&-overly-open*/

    $('.search-close, .sidr-close').on('click',function(){
        $('.search-bar, .show-overly').removeClass('active');
    });/*search-&-sidr-&-overly-close*/

});