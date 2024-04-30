gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero h1, .hero p", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
});

// About Section Animation
gsap.from("#about p", {
  duration: 1,
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
});

// Skills Section Animation
gsap.from(".skill-list li", {
  duration: 1,
  x: -50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 95%",
    end: "bottom 20%",
    scrub: true,
  },
});
