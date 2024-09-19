// tween : 하나의 애니메이션(한 장면)

// gsap.to(".box", {
//   x: 500,
//   duration: 2,
//   rotation: 360,
// });

// gsap.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 1, x: 300 });

// timeline : 여러 개의 tween(하나의 시나리오)

const timeline = gsap.timeline();
// timeline
//   .fromTo(".box", { x: 0 }, { x: 100, duration: 1 })
//   .fromTo(".box", { y: 0 }, { y: 100, duration: 1 })
//   .fromTo(".box", {}, { backgroundColor: "green", rotation: 180, duration: 1 });

timeline
  .fromTo(
    ".text",
    {},
    { display: "none", opcatity: 0, duration: 1, ease: "power1.in" }
  )
  .fromTo(
    ".genesis",
    { y: 1000 },
    { y: 0, display: "block", duration: 1, ease: "power1.inOut" }
  )
  .fromTo(
    ".genesis",
    {},
    {
      width: "100%",
      height: "100%",
      duration: 1.5,
      delay: 0.3,
      ease: "power1.inOut",
    }
  );

//   scrollTrigger: {
//     trigger: ".genesis",
//     toggleAction: "restart pause reverse pause",
//   },
