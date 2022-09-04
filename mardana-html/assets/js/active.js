/*
Template: Agencyzilla - The Digital Marketing Agency for Startups
Author: https://themeforest.net/user/ahmmedsabbirbd
*/

(function ($) {

    /*** Page Load Animation */
    // const pageLoadAnimation = document.querySelector("#page-load-animaiton");
    // window.addEventListener("load", (event) => {
    //     setTimeout(function(){ 
    //         pageLoadAnimation.parentElement.removeChild(pageLoadAnimation);
            
    //         /*** AOS */
    //         AOS.init({
    //             once: true,
    //             offset: 100,
    //             duration: 900,
    //         });

    //         /*** Number Counter */
    //         $('.counter').counterUp({
    //             delay: 10,
    //             time: 1000
    //         });
    //     }, 5000);
    // });

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
        name: 'sidr',
        side: 'right',
        source: '#sidr',
        displace: false,
        renaming: false,
    });

    /*** Dropdown Menu */
    $('.navbar-nav .dropdown-menu').click(function(){
        $(this).parent().parent().toggleClass('show');
    });

    $('.navbar-toggle.in').on('click', function(){
        $.sidr('close', 'sidr');
    });

    /** Sidr submenu */
    function techexMobileMenu() {
        var $nav = $(".navbar-mobile"),
            $back_btn = $nav.find(" > li.dropdown > ul.dropdown-menu").prepend("<li class='dropdown-back d-flex flex-wrap align-items-center justify-content-between'><div class='control ml-auto d-flex align-items-center' style='white-space: nowrap; color: #16cd00;'>Back<span class='fa fa-arrow-left' style='width: 40px; height: 40px; margin-left: 15px; color: #fff; font-size: 20px; line-height: 41px; text-align: center; background: #16cd00; border-radius: 500px; display: inline-block;'></span></div></li>");

        // For Title
        $('.navbar-mobile li.dropdown > a').each(function(){
            $(this).siblings("ul").find("li.dropdown-back").prepend("<div class='title'><a>" + $(this).text() +"</a></div>");
        });

        // open sub-level
        $('.navbar-mobile li.dropdown > a .dropdown-toggle').on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();

            $(this).parent().parent().addClass("is-open");
            $(this).parents().find( '.navbar-mobile' ).addClass("is-parent");


            var header = $(this).parent().parent().find('ul.dropdown-menu').height(),
                gutter = $('.agencyzilla-mobile-nav');

            if ( gutter ) 
            {
                gutter.height(header+15);
            }
        });

        // go back
        $back_btn.on("click", ".dropdown-back", function(e) {
            e.stopPropagation();
            $(this)
            .parents(".is-open")
            .first()
            .removeClass("is-open");

            var header = $(this).parents(".is-parent").first().height();

            $(this)
            .parents(".is-parent")
            .first()
            .removeClass("is-parent");

            var gutter = $('.agencyzilla-mobile-nav');

            setTimeout(function() {
                if (gutter) {
                    gutter.height(header);
                } 
            }, 200);
        });
    }
    techexMobileMenu();

    $(window).scroll(function(){
        if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
           $.sidr('close', 'sidr');
           $('.navbar-toggler').removeClass('in');
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

    /*** btn hover animation */
    $('.btn, .btn-menu').hoverdir({
        hoverDelay: 75
    });

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

    /*** brands-logo-slider */
    $('.brands-logo-slider-wrapper').slick({
        dots: false,
        autoplay: true,
        speed: 5000,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        autoplaySpeed: 0,
        cssEase: 'linear',
        centerMode: true,
        slidesToScroll: 1
    });

    /*** Clients Slider */
    var clientstime = 5;
    var $clientsbar,
        $clientsslick,
        clientsisPause,
        clientstick,
        clientspercentTime;

    $clientsslick = $('.clients-slider');

    $clientsslick.slick({
        autoplay: true,
        speed: 300,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        initialSlide: 1,
        centerMode: true,
        slidesToScroll: 1,
        appendDots: $('.clients_slider_control'),
        centerPadding: '730px 0 0',
        responsive: [ 
            {
                breakpoint: 1461,
                settings: {   
                    centerPadding: '650px 0 0',
                }
            },
            {
                breakpoint: 1200,
                settings: { 
                    centerPadding: '450px 0 0',
                }
            } ,
            {
                breakpoint: 992,
                settings: { 
                    centerPadding: '240px 0 0',
                }
            }  ,
            {
                breakpoint: 768,
                settings: { 
                    centerPadding: '150px 0 0',
                }
            }  ,
            {
                breakpoint: 576,
                settings: { 
                    centerPadding: '100px 0 0',
                }
            }  ,
            {
                breakpoint: 481,
                settings: { 
                    centerPadding: '65px 0 0',
                }
            } 
        ]
    })

    $clientsbar = $('.clients_slider_control .slider-progress .progress');

    $clientsslick.on({
        mouseenter: function() {
            clientsisPause = true;
        },
        mouseleave: function() {
            clientsisPause = false;
        }
    })

    function startProgressbar_clients() {
        resetProgressbar_clients();
        clientspercentTime = 0;
        clientsisPause = false;
        clientstick = setInterval(interval_clients, 5);
    }

    function interval_clients() {
        if( clientsisPause === false ) 
        {
            clientspercentTime += 1 / (clientstime+0.1);
            $clientsbar.css({
                width: clientspercentTime+"%"
            });

            if(clientspercentTime >= 100)
            {
                $clientsslick.slick('slickNext');
                startProgressbar_clients();
            }
        }
    }

    function resetProgressbar_clients() {
        $clientsbar.css({
            width: 0+'%' 
        });
        clearTimeout(clientstick);
    }
    startProgressbar_clients();

    /*** pricing table */
    var pricingSwitcher = document.getElementById("switcher"),
    pricingMonthly = document.getElementById("monthly"),
    pricingYearly = document.getElementById("yearly");

    if ( pricingSwitcher ) {
        pricingSwitcher.addEventListener("click", function(){

            if ( pricingSwitcher.checked == true ) {
                pricingMonthly.classList.add("hide");   
                pricingYearly.classList.remove("hide");
            } else { 
                pricingMonthly.classList.remove("hide");   
                pricingYearly.classList.add("hide");   
            }
        });
    }

    /*** lastNobullet */
    function lastNobullet() {
        var lastElement = false;
        $(".lastNobullet li").each(function() {
            if (lastElement && lastElement.offset().top != $(this).offset().top) {
                $(lastElement).addClass("nobullet");
            } else {
                $(lastElement).removeClass("nobullet");
            }
            lastElement = $(this);
        }).last().addClass("nobullet");
    };
    lastNobullet();

    $(window).resize(function(){
        lastNobullet();
    });

}(jQuery));