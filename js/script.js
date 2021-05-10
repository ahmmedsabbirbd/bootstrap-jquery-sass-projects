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

    /*/// init Isotope ///*/
    var $grid = $('.product-filter').isotope({
        itemSelector: '.item'
    });

    var filters = {};    /// store filter for each group

    $('.product-filter-button').on( 'click', '.button', function( event ) {
        var $button = $( event.currentTarget );
        var $buttonGroup = $button.parents('.filter-items');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        filters[ filterGroup ] = $button.attr('data-filter');
        var filterValue = concatValues( filters );
        $grid.isotope({ filter: filterValue });
    });

    
    $('.filter-items').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );

        $buttonGroup.on( 'click', 'button', function( event ) {
        $buttonGroup.find('.active').removeClass('active');
            var $button = $( event.currentTarget );
            $button.addClass('active');
        });
    }); /// change is-checked class on buttons


    
    function concatValues( obj ) {
        var value = '';
        for ( var prop in obj ) {
          value += obj[ prop ];
        }
        return value;
    }  // flatten object by concatting values
 
    $('.product-gallery .product-item').each( function() { $(this).hoverdir(); } );

    // jQuery(function(){
    //     jQuery("#design-video").YTPlayer({
    //         mute: true,
    //         opacity: .6,
    //         autoplay: true,
    //         showControls: false,
    //     });
    // });
});