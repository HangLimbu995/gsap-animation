

const tl = gsap.timeline()

tl.from("h2",
    {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
    });
tl.from('h4', {
    y: -40,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
})


gsap.from('.page2 .box', {
    rotate: 360,
    duration: 2,
    delay: 1,
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: '.page2 .box',
        scroller: 'body',
        // markers: true,
        start: 'top 60%',
        end: 'top 30%',
        scrub: 3,
    }
})

gsap.to('.page3 h1', {
    transform: 'translateX(-30%)',
    // duration:2,
    // delay:1,
    scrollTrigger: {
        trigger: '.page3',
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end:'top -150%',
        scrub:2,
        pin:true,
    }
})