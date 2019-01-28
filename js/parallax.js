$(window).scroll(function () {
    parallax();
});

function parallax() {
    var windowScroll = $(window).scrollTop();

    var personPicParallax = (windowScroll * .0185);
    var bioParallax = (windowScroll * .00475);
    console.log(bioParallax);

    $('#home').css('background-position', 'center ' + (windowScroll * .35) + 'px');
    $('#bio').css('left', bioParallax + 'vw', 'important');
    $('#person').css('top', personPicParallax + 'vh');
}