$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var tween = new TimelineLite();
    tween.add(TweenMax.from('#person', .15, { width: '0vw', height: '0vh' }));
    tween.add(TweenMax.to('.about-inner', .15, { width: '45.6vw' }));
    
    var scene = new ScrollMagic.Scene({
        triggerElement: '#about #person',
        triggerHook: 0.5,
    })
        .reverse(true)
        .addIndicators({
            name: 'test',
            indent: 200,
            colorStart: 'red',
            colorTrigger: 'black'
        })
        .setTween(tween)
        .addTo(controller);
});