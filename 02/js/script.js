$('documnet').ready(function() {
 
    $('.navbar-toggler').sidr({
        side: 'right',
        renaming: false,
        displace: false,
        source: '#asidr',
        name: 'asidr-main',
    });/*** sidr-option */

    $('.sidr-close').on('click', function(){
        $.sidr('close', 'asidr-main');
    });/*** sidr-open */ 
    
    $('.navbar-toggler').on('click',function(){
        $('.show-overly').addClass('active');
    });/*** sidr-overly-open */ 

    $('.sidr-close').on('click',function(){
        $('.show-overly').removeClass('active');
    });/*** sidr-&-overly-close */

    /*** Header height = gutter height */
    function setGutterHeight(){
        var header = document.querySelector('.header'),
            gutter = document.querySelector('.headergutter'),
            footer = document.querySelector('.footer');
            footerGutter = document.querySelector('.content-wrapper');

        if ( gutter ) {
            gutter.style.height = header.offsetHeight + 'px';
        }
        
        console.log(gutter);

        if ( footerGutter ) {
            footerGutter.style.paddingBottom = footer.offsetHeight + 'px';
        }
    }
    window.onload = setGutterHeight;
    window.onresize = setGutterHeight;

    $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('.header').addClass('header-sticky ');
      } else {
         $('.header').removeClass('header-sticky ');
      }
  });/*** header-sticky */
});