
var $ = jQuery;
$(document).ready(function () {
    /*Fades in the page when the document is ready*/
    $('div.hidden').fadeIn(2000).removeClass('hidden');
    /*Changes the background color of the navigation*/
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    /*Makes smooth scrolling only when we click each anchor or button*/
    var anchor;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
});