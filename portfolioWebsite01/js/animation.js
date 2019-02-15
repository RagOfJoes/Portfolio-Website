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
    pathFinderText.to('.pathFinderText', .4, { autoAlpha: '0', y: '-500px' });
}).mouseleave(function () {
    pathFinderText.to('.pathFinderText', .4, { autoAlpha: '1', y: '0px', ease: Elastic.easeOut.config(.4, .5) });
});

$('.buttonContainer').each(function (index, element) {
    var contactAnim = new TimelineLite({ paused: true });
    contactAnim.to($(element), .2, { width: '60%' });
    contactAnim.to($(element).find('.footerButton'), .5, { letterSpacing: '.4em' }, 'together');
    contactAnim.to($(element).find('.footerButton'), .2, { autoAlpha: '0' }, 'together');

    element.animation = contactAnim;
});

$('.buttonContainer').mouseenter(function () {
    this.animation.play();
}).mouseleave(function () {
    this.animation.reverse();
});
