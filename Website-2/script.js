const cursorAnimation = () => {
  const page1Content = document.querySelector("#page1-content");
  const cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
      x: event.x,
      y: event.y,
    });
  });

  page1Content.addEventListener("mouseleave", function (event) {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });

  page1Content.addEventListener("mouseenter", function (event) {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });
};

const cursorAnimation2 = () => {
  const page5Content = document.querySelector("#page5-content");
  const cursor = document.querySelector(".cursor2");

  page5Content.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
      x: event.x,
      y: event.y,
    });
  });

  page5Content.addEventListener("mouseleave", function (event) {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });

  page5Content.addEventListener("mouseenter", function (event) {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });
};

const smoothScroll = () => {
  const lenis = new Lenis({
    // wrapper: '#main',
    lerp: 0.06,
    smoothWheel: true,
  });

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

const splitTextAnimation = (element, page) => {
  gsap.from(`${element}`, {
    y: 100,
    stagger: 0.2,
    duration: 4,
    ease: "none",
    scrollTrigger: {
      trigger: `${page}`,
      scroller: "body",
      start: "top 50%",
      end: "top 45%",
      markers: false,
      scrub: 1.5,
    },
  });
};

const underLineAnimation = (element, page) => {
  gsap.from(`${element}`, {
    width: "20%",
    stagger: 0.2,
    duration: 3,
    ease: "none",
    scrollTrigger: {
      trigger: `${page}`,
      scroller: "body",
      start: "top 60%",
      end: "top 50%",
      markers: false,
      scrub: 1.5,
    },
  });
};

const tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 2,
  stagger: 0.1,
});
tl.to("#loader h3", {
  opacity: 0,
  x: -40,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader", {
  duration: 1.2,
  ease: "power4.inout",
  height: 0,
  // opacity: 0,
});
tl.from("#page1-content h1 span", {
  delay: -1.5,
  y: 200,
  stagger: 0.15,
  ease: "power4.inout",
  duration: 1,
});
tl.to("#loader", {
  display: "none",
});
tl.from("nav h3, nav h4", {
  delay: -1.3,
  duration: 2,
  y: 40,
  opacity: 0,
  ease: "power4.out",
});

cursorAnimation();
smoothScroll();
splitTextAnimation(".page2-top-ani, .page2-bottom-ani", "#page2");
splitTextAnimation(".page3-top-ani", "#page3");
splitTextAnimation(".page4-top-ani, .page4-bottom-ani", "#page4");
splitTextAnimation(".page6-top-ani, .page6-bottom-ani", "#page6");
underLineAnimation(".page4-underline", "#page4");
cursorAnimation2();
