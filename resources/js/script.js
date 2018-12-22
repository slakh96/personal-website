
var $ = jQuery;
$(document).ready(function () {
    /*Fades in the page when the document is ready*/
    $('div.hidden').fadeIn(2000).removeClass('hidden');
    /*If the document was loaded and it initialized to be not at the top (i.e. refresh the page) then add navbar bg.*/
    var $nav = $(".navbar");
    if ($(this).scrollTop() > $nav.height()){
        $nav.addClass('navbar-scrolled');
    }
    
    /*Changes the background color of the navigation*/
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            /*Toggles the class either if we go up to the top, or move from the top. */
            $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    /*Makes smooth scrolling only when we click each anchor or button*/
    var anchor;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth', block: "start", inline: "nearest"
            });
        });
    });
    /*Make each section fade in when we scroll to it the first time*/
    $('.js-scrolled-bio').waypoint(function(direction) {
        $('.js-scrolled-bio').addClass("animated fadeInLeft");
    }, {
        offset: '50%'
    });
    $('.js-scrolled-skills').waypoint(function(direction) {
        $('.js-scrolled-skills').addClass("animated fadeInRight");
    }, {
        offset: '50%'
    });
     $('.js-scrolled-projects').waypoint(function(direction) {
        $('.js-scrolled-projects').addClass("animated fadeInLeft");
    }, {
        offset: '50%'
    });
    $('.js-scrolled-work-experience').waypoint(function(direction) {
        $('.js-scrolled-work-experience').addClass("animated fadeInRight");
    }, {
        offset: '50%'
    });
    $('.js-scrolled-courses').waypoint(function(direction) {
        $('.js-scrolled-courses').addClass("animated fadeInLeft");
    }, {
        offset: '50%'
    });
    $('.js-scrolled-footer').waypoint(function(direction) {
        $('.js-scrolled-footer').addClass("animated fadeIn");
    }, {
        offset: '90%'
    });
    
});