
var $ = jQuery;
$(document).ready(function () {
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    $(function () {
        $(body).fadeIn(300, null);
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
});