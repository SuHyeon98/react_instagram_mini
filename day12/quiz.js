const tl = gsap.timeline();

// tl.to(".text1", { x: 200, duration: 1 });
// tl.to(".text3", { x: 200, duration: 1 });

const fadeInText = { color: "black", duration: 0.5, ease: "power4.in" };

tl.fromTo("body", {}, { backgroundColor: "white", duration: 2.5 })
  .fromTo(
    ".text2",
    {},
    { color: "black", duration: 0.3, ease: "power4.in" },
    "<+.3"
  )
  .fromTo(".text1", {}, { color: "black", x: 350, duration: 1 }, "<")
  .fromTo(".text3", {}, { color: "black", x: -350, duration: 1 }, "<");
//   .fromTo(".text1", {}, { display: "none", duration: 0.5 })
//   .fromTo(".text2", {}, { display: "none", duration: 0.5 }, "<")
//   .fromTo(".text3", {}, { display: "none", duration: 0.5 }, "<")
//   .fromTo(
//     ".img1",
//     { y: 1000 },
//     { y: 0, display: "block", duration: 1, ease: "power1.inOut", delay: 0.3 },
//     "<+.5"
//   )
//   .fromTo(".img1", {}, { display: "none", duration: 1, delay: 0.3 })
//   .fromTo(
//     ".img2",
//     { y: 1000 },
//     { y: 0, display: "block", duration: 1, ease: "power1.inOut" },
//     "<1"
//   );
