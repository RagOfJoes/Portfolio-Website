$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    // Start About Tween
    var aboutTween = new TimelineLite();
    aboutTween.to('#aboutTextContainer', .2, { height: '400px', autoAlpha: 1, ease: Power1.easeOut }, 'first')
        .from('#personPicture', .2, { height: '0px', autoAlpha: 0, ease: Power1.easeOut }, 'first')

    new ScrollMagic.Scene({
        triggerElement: '#about #personContainer',
        triggerHook: 0.4
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
        duration: '150%'
    })
        .setPin('#projects')
        .setTween(projectsTween)
        .addTo(controller);
    // End Projects Tween
});