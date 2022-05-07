(function ($) {
	var ua = window.navigator.userAgent;
	var isIE = /MSIE|Trident/.test(ua);

	if ( !isIE ) {
		//IE specific code goes here
		"use strict";
	}

    /** Adobe typekit font */
    try{Typekit.load({ async: true });}catch(e){};

    /*** Sticky header */
	$(window).scroll(function(){
		if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
			$(".header").addClass("stop");
		} else {
			$(".header").removeClass("stop");
		}
	});

	/*** Sticky header */
	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = 100;

	window.addEventListener("scroll", () => {
	  	const currentScroll = window.pageYOffset;
	  	if (currentScroll <= 0) 
	  	{
	    	body.classList.remove(scrollUp);
	    	return;
	  	}

	  	if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
	  	{
	    	// down
	    	body.classList.remove(scrollUp);
	    	body.classList.add(scrollDown);
	  	} 
	  	else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
	  	{
	    	// up
	    	body.classList.remove(scrollDown);
	    	body.classList.add(scrollUp);
	  	}

	  	lastScroll = currentScroll;
	});

	/*** Navbar Menu */
    $('.navbar-toggle').sidr({
        name: 'sidr-main',
        side: 'right',
        source: '#sidr',
        displace: false,
        renaming: false,
    });

    $('.navbar-toggle.in').on('click', function(){
        $.sidr('close', 'sidr-main');
    });

    $(window).scroll(function(){
        if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
           $.sidr('close', 'sidr');
           $('.navbar-toggler').removeClass('in');
        }
    });

    /** Sidr submenu */
	$('.sidr-inner .navbar-nav li a .dropdown-toggle').on('click', function () {
		if ($(this).parent().siblings('ul.dropdown-menu').length > 0) {
			if ($(this).parent().parent().hasClass('active')) {
				$(this).parent().parent().removeClass('active');
			} else {
				$(this).parent().parent().addClass('active');
			}
		}
	});

    /*** Scroll Nav */
    $('.navbar-nav li a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: (target.offset().top - 75)
	        }, 1000, "easeInOutExpo");
	        return false;
	      }
	    }
	});

	/*** Header height = gutter height */
	function setGutterHeight(){
		var header = document.querySelector('.header'),
			  gutter = document.querySelector('.header-gutter');
		if (gutter) {
			gutter.style.height = header.offsetHeight + 'px';
		}
	}
	window.onload = setGutterHeight;
	window.onresize = setGutterHeight;

    /*** ScrollDown */
	$('.scrollDown').click(function() {
	    var target = $('#primary');
	    var space = $(this).data('space');

	    if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - space
	        }, 1000);
	    }
	});

	/*** lastNobullet */
	function lastNobullet() {
	    var lastElement = false;
	    $(".last_no_bullet li").each(function() {
	        if (lastElement && lastElement.offset().top != $(this).offset().top) {
	            $(lastElement).addClass("no_bullet");
	        } else {
	            $(lastElement).removeClass("no_bullet");
	        }
	        lastElement = $(this);
	    }).last().addClass("no_bullet");
	};
	lastNobullet();

	$(window).resize(function(){
	    lastNobullet();
	});

	/*** Smooth scroll */
    $('.smoothScroll, .smoothScroll a').click(function() {
       	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           	var target = $(this.hash);
           	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           	if (target.length) {
               	$('html,body').animate({
                   scrollTop: target.offset().top - 0
               	}, 1e3, "easeInOutExpo");

               return false;
           }
       	}
    });

	/*** join-kickout lightbox */
    $('.list-how-work').magnificPopup({
      removalDelay: 300, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function() {
           this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      midClick: true,
      closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
    });

	/*** Masonry */
    function masonryGrid(){
        var $grid = $('.masonry');
        // initialize
        $grid.masonry({
            itemSelector: '.item',
            columnWidth: '.item',
            horizontalOrder: false,
            // isAnimated: true,
            // percentPosition: true,
        });

        $grid.masonry('reloadItems');
        $grid.masonry('layout');

        // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
        });
    }
    masonryGrid();

    /*** Generated by CoffeeScript 1.9.2 */
	function stickyKit() {
	    var reset_scroll;

	    $(function() {
	        return $("[data-sticky_column]").stick_in_parent({
	            parent: "[data-sticky_parent]",
	            offset_top: 120,
	            bottoming: true,
	        });
	    });

	    reset_scroll = function() {
	        var scroller;
	        scroller = $("body,html");
	        scroller.stop(true);

	        if ($(window).scrollTop() !== 0) {
	            scroller.animate({
	                scrollTop: 0
	            }, "fast");
	        }
	        return scroller;
	    };

	    window.scroll_it = function() {
	        var max;
	        max = $(document).height() - $(window).height();

	        return reset_scroll().animate({
	            scrollTop: max
	        }, max * 3).delay(100).animate({
	            scrollTop: 0
	        }, max * 3);
	    };

	    window.scroll_it_wobble = function() {
	        var max, third;
	        max = $(document).height() - $(window).height();
	        third = Math.floor(max / 3);

	        return reset_scroll().animate({
	            scrollTop: third * 2
	        }, max * 3).delay(100).animate({
	            scrollTop: third
	        }, max * 3).delay(100).animate({
	            scrollTop: max
	        }, max * 3).delay(100).animate({
	            scrollTop: 0
	        }, max * 3);
	    };

	    $(window).on("load", (function(_this) {
	        return function(e) {
	            return $(document.body).trigger("sticky_kit:recalc");
	        };
	    })(this));

	    $(window).on("resize", (function(_this) {
	        return function(e) {
	            return $(document.body).trigger("sticky_kit:recalc");
	        };
	    })(this));
	}

	var window_width = $(window).width();

	if (window_width < 1200) {
	    $(document.body).trigger("sticky_kit:detach");
	} else {
	    stickyKit();
	}

	$( window ).resize(function() {
	    window_width = $( window ).width();
	    if (window_width < 1200) {
	        $(document.body).trigger("sticky_kit:detach");
	    } else {
	        stickyKit();
	    }
	});

	/*** Image to SVG */
	$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');
	
	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');
	
	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }
	
	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');
	        
	        // Check if the viewport is set, else we gonna set it if we can.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }
	
	        // Replace image with new SVG
	        $img.replaceWith($svg);

	        var rellax = new Rellax('.rellax');
	
	    }, 'xml');
	});

    $('.readmore').readmore({ 
    	speed: 75,
    	collapsedHeight: 360,
    	moreLink: '<a href="#" class="readmore__anchor">Expand +</a>',
    	lessLink: '<a href="#" class="readmore__anchor">Expand -</a>' }, 
    );

    $('.about-readmores').readmore({ 
    	speed: 75,
    	collapsedHeight: 310,
    	moreLink: '<a href="#" class="readmore__anchor">Keep Reading +</a>',
    	lessLink: '<a href="#" class="readmore__anchor">Keep Reading -</a>' }, 
    );

	/*** Number Counter */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	var rellax = new Rellax('.rellax');

	/*** enable lightbox */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: false,
        fixedBgPos: true,
        removalDelay: 500,
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function() { 
                this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
    });

    $('.enable_lightbox').magnificPopup({
        type: 'image',
        midClick: true,
        fixedBgPos: true,
        removalDelay: 500,
        fixedContentPos: true,
        tLoading: 'Loading image #%curr%...',
        image: {
            verticalFit: true,
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.find('img').attr('alt');
            }
        },
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-move-from-top vertical-middle enable-lightbox-wrapper';
            },
            buildControls: function() {
              // re-appends controls inside the main container
              // this.contentContaine.append(this.arrowLeft.add(this.arrowRight));
            }
        },
        closeOnContentClick: true,
        midClick: true,
        closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
    });

    $('.story-gallery').magnificPopup({
        type: 'inline',
        delegate: 'a',  
        gallery:{
            enabled:true
        },
        midClick: true,
        fixedBgPos: true,
        removalDelay: 500,
        closeBtnInside: false,
        fixedContentPos: true,
        tLoading: 'Loading image #%curr%...',
        image: {
            verticalFit: true,
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.find('img').attr('alt');
            }
        },
        callbacks: {
            beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-move-from-top vertical-middle enable-lightbox-wrapper';
            },
            buildControls: function() {
              // re-appends controls inside the main container
              // this.contentContaine.append(this.arrowLeft.add(this.arrowRight));
            }
        },
        closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"><i class="icon-xmark"></i></button>',
    });

	/*** BrowserDetect */
	var BrowserDetect = {
	    init: function () {
	        this.browser = this.searchString(this.dataBrowser) || "Other";
	        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
	    },
	    searchString: function (data) {
	        for (var i = 0; i < data.length; i++) {
	            var dataString = data[i].string;
	            this.versionSearchString = data[i].subString;

	            if (dataString.indexOf(data[i].subString) !== -1) {
	                return data[i].identity;
	            }
	        }
	    },
	    searchVersion: function (dataString) {
	        var index = dataString.indexOf(this.versionSearchString);
	        if (index === -1) {
	            return;
	        }

	        var rv = dataString.indexOf("rv:");
	        if (this.versionSearchString === "Trident" && rv !== -1) {
	            return parseFloat(dataString.substring(rv + 3));
	        } else {
	            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	        }
	    },

	    dataBrowser: [
	        {string: navigator.userAgent, subString: "Edge", identity: "MSEdge"},
	        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
	        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
	        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
	        {string: navigator.userAgent, subString: "Opera", identity: "Opera"},  
	        {string: navigator.userAgent, subString: "OPR", identity: "Opera"},  

	        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, 
	        {string: navigator.userAgent, subString: "Safari", identity: "Safari"}       
	    ]
	};
	
	BrowserDetect.init();
	document.body.classList.add( BrowserDetect.browser );

}(jQuery));
