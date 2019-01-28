$(window).scroll(function () {
    parallax();
});

function parallax() {
    var windowScroll = $(window).scrollTop();

    var personPicParallax = (windowScroll * .013);
    var bioParallax = -1 * (windowScroll * .005);

    $('#home').css('background-position', 'center ' + (windowScroll * .35) + 'px');
    $('#bio').css('left', bioParallax + '%');
    $('#person').css('padding-top', personPicParallax + 'vh');
}