$(window).scroll(function () {
    changeNav();
});

function changeNav() {
    if ($('#projectsNav').hasClass('active') || $("#contactNav").hasClass('active')) {
        $('.navbar a').css('color', '#242529', 'important');
        // $('.navbar-nav .nav-link.active').css('color', '#242529', 'important');
    } else {
        $('.navbar a').css('color', '#a3a3a3');
        $('.navbar-nav .nav-link.active').css('color', 'white', 'important');
    }
}