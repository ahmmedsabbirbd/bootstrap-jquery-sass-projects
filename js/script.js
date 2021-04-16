$('documnet').ready(function() {

  new WOW().init(); /*** wow start */ 
  
    $('.navbar-toggler').sidr({
        side: 'right',
        renaming: false,
        displace: false,
        source: '#asidr',
        name: 'asidr-main',
    });/*** sidr-option*/

    $('.sidr-close').on('click', function(){
        $.sidr('close', 'asidr-main');
    });/*** idr-open*/
 
    $('.navbar-toggler').on('click',function(){
        $('.show-overly').addClass('active');
    });/*** idr-overly-open*/

    $('.search-triger').on('click',function(){
        $('.search-bar, .show-overly').addClass('active');
    });/*** earch-&-overly-open*/

    $('.search-close, .sidr-close').on('click',function(){
        $('.search-bar, .show-overly').removeClass('active');
    });/*** search-&-sidr-&-overly-close*/

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

});