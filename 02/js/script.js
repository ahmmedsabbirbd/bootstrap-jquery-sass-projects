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

    $("ul.navbar-nav li.dropdown .dropdown-caret").click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown').toggleClass("show");
        $(this).parents('.dropdown').children('.dropdown-menu').toggleClass("show");
        $(this).siblings(".dropdown-menu").slideToggle();
    }); /*** sidr dropdown */

    $("ul.navbar-nav li.dropdown .dropdown-menu li.dropdown .dropdown-caret-01 ").click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown').toggleClass("show-01");
        $(this).parents('.dropdown').children('.dropdown-menu').toggleClass("show-01");
        $(this).siblings(".dropdown-menu").slideToggle();
    }); /*** sidr dropdown-01 */

    $("ul.navbar-nav li.dropdown .dropdown-menu li.dropdown .dropdown-menu .dropdown-caret-02 ").click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown').toggleClass("show-02");
        $(this).parents('.dropdown').children('.dropdown-menu').toggleClass("show-02");
        $(this).siblings(".dropdown-menu").slideToggle();
    }); /*** sidr dropdown-02 */

    $("ul.navbar-nav li.dropdown .dropdown-menu li.dropdown .dropdown-menu li.dropdown .dropdown-menu .dropdown-caret-03 ").click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown').toggleClass("show-03");
        $(this).parents('.dropdown').children('.dropdown-menu').toggleClass("show-03");
        $(this).siblings(".dropdown-menu").slideToggle();
    }); /*** sidr dropdown-02 */

    $('.search-triger').on('click',function(){
        $('.search-bar, .show-overly').addClass('active');
    });/*** earch-&-overly-open*/

    $('.fabarite-triger').on('click',function(){
        $('.fabarite-bar, .show-overly').addClass('active');
    });/*** earch-&-overly-open*/

    $('.search-close, .sidr-close').on('click',function(){
        $('.search-bar, .show-overly, .fabarite-bar').removeClass('active');
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

    $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('.header').addClass('header-sticky ');
      } else {
         $('.header').removeClass('header-sticky ');
      }
    });/*** header-sticky */ 

    // check for saved 'darkMode' in localStorage
    let darkMode = localStorage.getItem('darkMode'); 

    const darkModeToggle = document.querySelector('#dark-mode-toggle');

    const enableDarkMode = () => {
        document.body.classList.add('darkmode'); /// Add the class to the body
        localStorage.setItem('darkMode', 'darkMode-active'); /// Update darkMode in localStorage
    } /*** ES 6 of javascript */

   /* function enableDarkMode () {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkMode', 'darkMode-active');
    }*/ /*** javascript old versiton */

    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');/// Remove the class from the body
        localStorage.setItem('darkMode', "darkMode-disactive"); /// Update darkMode in localStorage
    } /*** ES 6 of javascript */
     
    /*function disableDarkMode () {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkMode', 'darkMode-disactive');
    }*/ /*** javascript old versiton */

    if (darkMode === 'darkMode-active') {
      enableDarkMode();
    } /// If the user already visited and enabled darkMode

    darkModeToggle.addEventListener('click', () => {
       darkMode = localStorage.getItem('darkMode'); 

        if (darkMode !== 'darkMode-active') {
        enableDarkMode();
        /// if it not current enabled, enable it
        } else {  
        disableDarkMode(); 
        }/// if it has been enabled, turn it off  
    }); /*** ES 6 of javascript */

   /* $("#dark-mode-toggle").click(function(){
        darkMode = localStorage.getItem('darkMode'); 

        if (darkMode !== 'darkMode-active') {
        enableDarkMode();
        /// if it not current enabled, enable it
        } else {  
        disableDarkMode(); 
        }/// if it has been enabled, turn it off  
    });*/ 
    document.cookie = "usernamasdfe=John Doe";
    document.cookie = "name=;";
    document.cookie = "xxxxxxxxxxxxxxxxxxxxxx=John zxxxxxxxxxxxxxxxxxx;";

});