$(window).scroll(function () {
    parallax();
});

function parallax() {
    var windowScroll = $(window).scrollTop();

    var personPicParallax = (windowScroll * .0177);
    var bioParallax = (windowScroll * .005);

    $('#home').css('background-position', 'center ' + (windowScroll * .35) + 'px');
    // $('#bio').css('left', bioParallax + 'vw', 'important');
    // $('#person').css('top', personPicParallax + 'vh');
}