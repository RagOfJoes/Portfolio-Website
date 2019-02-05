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

$("#pathFinder").mouseover(function () {
    projectOneAnim(true);
}).mouseleave(function () {
    projectOneAnim(false);
});

function projectOneAnim(isHover) {
    var tween = new TimelineLite();
    if (isHover) {
        tween.to('.pathFinderDarkOverlay', .3, { width: '260px' }, 'together')
            .to('.pathFinderText', .3, { maxWidth: '260px' }, 'together')
            .to('.pathFinderDarkOverlay', .3, { height: '0px' });
    } else {
        tween.to('.pathFinderDarkOverlay', .3, { height: '100%' })
            .to('.pathFinderText', .3, { maxWidth: '0px' }, 'together')
            .to('.pathFinderText', .3, { maxWidth: '0px' }, 'together');
    }
}