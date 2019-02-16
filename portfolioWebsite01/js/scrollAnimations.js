$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    // Start About Tween
    var aboutTween = new TimelineLite();
    aboutTween.to('#aboutTextContainer', .3, { height: '400px', ease: Power1.easeOut }, 'first')
        .from('.aboutLightOverlay', .3, { height: '0px', ease: Power1.easeOut }, 'first')
        .from('#personPicture', .3, { height: '0px', ease: Power1.easeOut }, 'first')
        .from('.personLightOverlay', .3, { height: '0px', ease: Power1.easeOut }, 'first')
        .to('.personLightOverlay', .3, { width: '0px', ease: Power1.easeOut }, 'second')
        .to('.aboutLightOverlay', .3, { width: '0px', ease: Power1.easeOut }, 'second');

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
    // End About Tween

    // Start Projects Tween
    var projectsTween = new TimelineLite();
    projectsTween.to('#projectsContainer', .5, { z: -150 }) // z allows for sliding effect
        .to('#projectsContainer', 1, { x: '-50%' })
        .to('#projectsContainer', .5, { z: 0 }); // puts page back into full page

    new ScrollMagic.Scene({
        triggerElement: '#projects',
        triggerHook: 'onLeave',
        duration: '300%'
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
    // End Projects Tween
});