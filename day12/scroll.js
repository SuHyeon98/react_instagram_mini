gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo(
//   ".box",
//   {},
//   {
//     x: 600,
//     scrollTrigger: {
//       trigger: ".test",
//       markers: true, // 개발자들 보기좋게 해놓은 표시
//       start: "top-=500", // top-=500 요소의 500px 위에서 시작하라는 뜻
//       end: "top-=300", // top-=500 요소의 300px 위에서 끝내라는 뜻
//       // start: "top 80%", // 200vh 80% 도달했을 때 시작하라는 뜻
//       // end: "top-=300", // 200vh 30% 도달했을 때 끝내라는 뜻
//       scrub: 1,
//     },
//   }
// );

const tl = gsap.timeline();

tl.fromTo(
  ".text1",
  {},
  {
    scrollTrigger: {
      trigger: ".text1",
      markers: true,
      start: "top 30%",
      end: "top 30%",
      scrub: 1,
    },
    display: "none",
    opcatity: 0,
  }
).fromTo(
  ".text2",
  {},
  {
    scrollTrigger: {
      trigger: ".text2",
      markers: true,
      start: "top 30%",
      end: "top 50%",
      scrub: 1,
    },
    duration: 1,
    display: "block",
  }
);
