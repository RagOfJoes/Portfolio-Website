$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var aboutTween = new TimelineLite();
    aboutTween.to('#aboutTextContainer', .35, { height: '400px', ease: Sine.easeOut }, 'first')
        .from('.aboutLightOverlay', .35, { height: '0px', ease: Sine.easeOut }, 'first')
        .from('#personPicture', .35, { height: '0px', ease: Sine.easeOut }, 'first')
        .from('.personLightOverlay', .35, { height: '0px', ease: Sine.easeOut }, 'first')
        .to('.personLightOverlay', .35, { width: '0px', ease: Sine.easeOut }, 'second')
        .to('.aboutLightOverlay', .35, { width: '0px', ease: Sine.easeOut }, 'second');

    new ScrollMagic.Scene({
        triggerElement: '#about #personContainer',
        triggerHook: 0.4,
    })
        .addIndicators({
            name: 'test',
            indent: 200,
            colorStart: 'red',
            colorTrigger: 'black'
        })
        .setTween(aboutTween)
        .addTo(controller);

    var projectsTween = new TimelineLite();
    projectsTween.to('#projectsContainer', .5, { z: -150 })
        .to('#projectsContainer', 1, { x: '-50%' })
        .to('#projectsContainer', .5, { z: 0 });

    new ScrollMagic.Scene({
        triggerElement: '#projects',
        triggerHook: 'onLeave',
        duration: '200%'
    })
        .addIndicators({
            name: 'test2',
            indent: 200,
            colorStart: 'blue',
            colorTrigger: 'pink'
        })
        .setPin('#projects')
        .setTween(projectsTween)
        .addTo(controller);
});