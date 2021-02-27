$('documnet').ready(function() {

  new WOW().init(); /*wow start*/
  
   $('.navbar-toggler').sidr({
        name: 'asidr-main',
        side: 'right',
        source: '#asidr',
        displace: false,
        renaming: false,
    });

    $('.sidr-close').on('click', function(){
        $.sidr('close', 'asidr-main');
    });

    $('body').swipe( {
        //Single swipe handler for left swipes
        swipeLeft: function () {
            $.sidr('open', 'asidr-main');
        },
        swipeRight: function () {
            $.sidr('close', 'asidr-main');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 45
    });
    
});