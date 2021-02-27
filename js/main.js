$('documnet').ready(function() {

  new WOW().init(); /*wow start*/
  
   $('.navbar-toggler').sidr({
        side: 'right',
        renaming: false,
        displace: false,
        source: '#asidr',
        name: 'asidr-main',
    });

    $('.sidr-close').on('click', function(){
        $.sidr('close', 'asidr-main');
    });

    $('body').swipe( {
        //Single swipe handler for left swipes
        swipeRight: function () {
            $.sidr('close', 'asidr-main');
            $('.show-overly').removeClass('active');
        },
        // swipeLeft: function () {
        //   $('.show-overly').removeClass('active');
        // },
        swipeLeft: function () {
            $.sidr('open', 'asidr-main');
            $('.show-overly').addClass('active')
        },
        /* swipeRight: function () {
            $('.show-overly').addClass('active');
          },*/
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 45
    }); 

    $('.navbar-toggler').on('click',function(){
        $('.show-overly').addClass('active');
    });

    $('.sidr-close').on('click',function(){
        $('.show-overly').removeClass('active');
    });

    $('.search-triger').on('click',function(){
        $('.search-bar').addClass('active');
    });

    $('.search-close').on('click',function(){
        $('.search-bar, .show-overly').removeClass('active');
    });

    $('.search-triger').on('click',function(){
        $('.show-overly').addClass('active');
    });
    
});