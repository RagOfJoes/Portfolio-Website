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