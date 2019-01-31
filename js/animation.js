// For Type Writer animation in landing page
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".typeWriter", {
        strings: ["[Hello World!]", "Welcome to my website!", "Hope you enjoy!"],
        showCursor: false,
        loopCount: false,
        typeSpeed: 55,
        backSpeed: 35,
        loop: true
    })
});

$("#pathFinderGIF").mouseover(function () {
    projectOneAnim(true);
}).mouseleave(function () {
    projectOneAnim(false);
});

function projectOneAnim(isHover) {
    var tween = new TimelineLite();
    if (isHover) {
        tween.to('.projectOneOverlay', .3, { width: '15vw' })
            .to('.projectOneOverlay', .5, { height: '0vh' }, 'together')
            .to('#projectOneBG', 0, { width: '15vw', height: '16.5vh' }, 'together');
    } else {
        tween.to('.projectOneOverlay', .3, { height: '16.5vh' })
            .to('.projectOneOverlay', .4, {width: '0vw'}, 'together')
            .to('#projectOneBG', .3, {width: '0vh'}, 'together');
    }
}