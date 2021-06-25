$('documnet').ready(function() {
    // Mmenu
    $('#menu').mmenu({
         navbar: {
            title: "Mmenu"
        }
    }); 

    /*** Header height = gutter height */
    function setGutterHeight(){
        var    footer = document.querySelector('.footer');
            footerGutter = document.querySelector('.content-wrapper');  

        if ( footerGutter ) {
            footerGutter.style.paddingBottom = footer.offsetHeight + 'px';
        }

        console.log(footerGutter);
    }
    window.onload = setGutterHeight;
    window.onresize = setGutterHeight;      
});


