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
	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	const searchBar = $('.search-wrap');
	let lastScroll = 100;
	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll <= 0) {
			body.classList.remove(scrollUp);
			return;
		}
		if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
			// down
			body.classList.remove(scrollUp);
			body.classList.add(scrollDown);
			searchBar.removeClass('search-show');
		} else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
			// up
			body.classList.remove(scrollDown);
			body.classList.add(scrollUp);

		}
		lastScroll = currentScroll;
	});

	/*** Hover Nav menu */
	function navbarHover() {

		var screensize = $(window).width();

		if (screensize > 991) {
			$('ul.navbar-nav li.dropdown.mega-menu').hover(function () {
				$('.header').addClass('hover-active');
				$(this).addClass('open')
				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(400);
			}, function () {
				$('.header').removeClass('hover-active');
				$(this).removeClass('open')
				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(400);
			});
		}
	}

	$(window).on("load", function () {
		navbarHover();
	});

	$(window).on("resize", function () {
		navbarHover();
	});

	/*** Sidr Menu */
	$('.navbar-toggle').sidr({
		name: 'sidr-main',
		side: 'left',
		source: '#sidr',
		displace: false,
		renaming: false,
	});

	$('.navbar-toggle.in').on('click', function () {
		$.sidr('close', 'sidr-main');
	}); 

	$('.navbar-nav .dropdown-toggle').click(function(){
        $(this).parent().toggleClass('show'); 
		$(this).parents('.dropdown').children(".dropdown-menu").slideToggle();
    });

    /*** Header height = gutter height */
	function setGutterHeight() {
		var header = document.querySelector('.header'),
			  gutter = document.querySelector('.header-gutter');
		if (gutter) {
			gutter.style.height = header.offsetHeight + 'px';
		}
	}
	window.onload = setGutterHeight;
	window.onresize = setGutterHeight;

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
