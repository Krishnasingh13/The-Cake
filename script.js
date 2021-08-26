var tl = gsap.timeline();

tl
    .from('#main', {
        width: 200,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .from('#main', {
        y: '-50%',
        duration: 1
        // ease: easeInOut
    })
    .from('span,h1,h4', {
        y: 30,
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut
    })
    .from('#scroll', {
        x: 20,
        duration: 1,
        opacity: 0
    })
    .from('#logo',{
        y:30,
        opacity:0,
        duration:1
    })
    .from('nav a',{
        duration:1.5,
        stagger:.2,
        opacity:0,
        x:30
    })
    .from('h5 , #line',{
        duration:1,
        stagger:.3,
        opacity:0,
        x:30
    })