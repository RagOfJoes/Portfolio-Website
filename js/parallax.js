$(window).scroll(function () {
    parallax();
});

function parallax() {
    var windowScroll = $(window).scrollTop();

    $('.landingBG').css('background-position', 'center ' + (windowScroll * .55) + 'px');
}