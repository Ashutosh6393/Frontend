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
      opacity:0,
      // scale: 0,
    });
  });

  page5Content.addEventListener("mouseenter", function (event) {
    gsap.to(cursor, {
      opacity: 1,
      // scale: 1,
    });
  });
};

const smoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.06,
    smoothWheel: true,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

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

cursorAnimation();
smoothScroll();
splitTextAnimation(".page2-top-ani, .page2-bottom-ani", "#page2");
splitTextAnimation(".page3-top-ani", "#page3");
splitTextAnimation(".page4-top-ani, .page4-bottom-ani", "#page4");
underLineAnimation(".page4-underline", "#page4");
cursorAnimation2();
