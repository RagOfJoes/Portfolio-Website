// For Type Writer animation in landing page
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".typeWriter", {
        strings: ["[Hello World!]", "[Hello User!]", "[Hello Internet!]"],
        showCursor: false,
        loopCount: false,
        typeSpeed: 85,
        backSpeed: 65,
        loop: true
    })
});

$('.projectContentOne').mouseover(function () {
    projectAnim(true);
}).mouseleave(function () {
    projectAnim(false);
});

$('.about-inner').mouseover(function () {
    aboutAnim(true);
}).mouseleave(function () {
    aboutAnim(false);
});

function projectAnim(isHover) {
    if (isHover) {
        $('#codeLangUsed').animate({ margin: '-14.25vh, 0, 0, 28.75vw' }, 125);
        // $('#gitHubLogo').animate({ margin: '10vh, 0, 0, 11.25vw' }, 1);
    } else {
        $('#codeLangUsed').animate({ margin: '-14.25vh, 0, 0, 28.25vw' }, 125);
    }
}

function aboutAnim(isHover) {
    if (isHover) {
        $('.aboutTitle').css({ 'transform': 'scale(1.03, 1.03)' });
    } else{
        $('.aboutTitle').css({ 'transform': 'scale(1, 1)' });
    }
}