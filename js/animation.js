// For Type Writer animation in landing page
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".typeWriter", {
        strings: ["[Hello World!]", "[Hello User!]", "[Hello Internet!]"],
        showCursor: false,
        loopCount: false,
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    })
});

var pathFinderText = new TimelineLite();
$('.pathFinderTextContainer').mouseover(function () {
    pathFinderText.to('.pathFinderText', .8, { autoAlpha: '0', y: '-600px' });
}).mouseleave(function () {
    pathFinderText.to('.pathFinderText', .8, { autoAlpha: '1', y: '0px', ease: Elastic.easeOut.config(.4, .2) });
})