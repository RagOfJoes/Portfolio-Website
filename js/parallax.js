$(window).scroll(function () {
    parallax();
});

function parallax() {
    var windowScroll = $(window).scrollTop();

    $('#home').css('background-position', 'center ' + (windowScroll * .35) + 'px');
}