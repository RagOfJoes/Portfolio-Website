$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var tween = new TimelineLite();
    tween.to('.aboutDarkOverlay', .35, { height: '0vh', ease: Sine.easeOut }, 'first')
        .to('.personDarkOverlay', .35, { height: '0vh', ease: Sine.easeOut }, 'first')
        .to('.aboutLightOverlay', .35, { width: '0px', ease: Sine.easeOut }, 'second')
        .from('.personLightOverlay', .35, { width: '450px', ease: Sine.easeOut }, 'second');

    var scene = new ScrollMagic.Scene({
        triggerElement: '#about #personContainer',
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