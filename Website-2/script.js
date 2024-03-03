const cursorAnimation = ()=>{const page1Content = document.querySelector("#page1-content");
const cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
  });
});

page1Content.addEventListener("mouseleave", function (event) {
  gsap.to(cursor, {
    scale: 0,
  });
});

page1Content.addEventListener("mouseenter", function (event) {
  gsap.to(cursor, {
    scale: 1,
  });
});}

const smoothScroll = ()=>{
    const lenis = new Lenis({
        smoothWheel: true,
    })

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}

const page2Animation = ()=>{
    gsap.from(".elem h3, .elem p", {
        y: 100,
        stagger: .2,
        duration: 1,
        // ease: "power2.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 60%",
            end: "top 57%",
            markers: true,
            scrub: 1.5
        }
    })
}





cursorAnimation();
smoothScroll();
page2Animation();