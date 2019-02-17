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

// Start PathFinder Animation
var pathFinderText = new TimelineLite();
$('.pathFinderTextContainer').mouseover(function () {
    pathFinderText.to('.pathFinderText', .3, { autoAlpha: '0', y: '-300px' });
}).mouseleave(function () {
    pathFinderText.to('.pathFinderText', .3, { autoAlpha: '1', y: '0px', ease: Elastic.easeOut.config(.4, .5) });
});
// End PathFinder Animation

// Start Contact Animation
$('.buttonContainer').each(function (index, element) {
    var contactAnim = new TimelineLite({ paused: true });
    contactAnim.to($(element), .2, { width: '60%' }, 'together');
    contactAnim.to($(element).find('.footerButton'), .2, { letterSpacing: '.15em' }, 'together');
    element.animation = contactAnim;
});

$('.buttonContainer').mouseenter(function () {
    this.animation.play();
}).mouseleave(function () {
    this.animation.reverse();
});
// End Contact Animation
