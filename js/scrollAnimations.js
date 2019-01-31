$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var tween = new TimelineLite();
    tween.to('.overlayAboutInnerOne', .35, { height: '0vh', ease: Sine.easeOut }, 'first')
        .to('.overlayTwo', .35, { height: '0vh', ease: Sine.easeOut }, 'first')
        .from('.overlayAboutInner', .35, { width: '45.6vw', ease: Sine.easeOut }, 'second')
        .to('.overlay', .35, { width: '0vw', ease: Sine.easeOut }, 'second');

    var scene = new ScrollMagic.Scene({
        triggerElement: '#about #person',
        triggerHook: 0.6,
    })
        .addIndicators({
            name: 'test',
            indent: 200,
            colorStart: 'red',
            colorTrigger: 'black'
        })
        .setTween(tween)
        .addTo(controller);
});