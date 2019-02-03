$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var tween = new TimelineLite();
    tween.to('.aboutDarkOverlay', .35, { height: '0vh', ease: Sine.easeOut }, 'first')
        .to('.personDarkOverlay', .35, { height: '0vh', ease: Sine.easeOut }, 'first')
        .from('.aboutLightOverlay', .35, { width: '45.6vw', ease: Sine.easeOut }, 'second')
        .from('.personLightOverlay', .35, { width: '30vw', ease: Sine.easeOut }, 'second');

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