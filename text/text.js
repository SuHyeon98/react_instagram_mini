const tl = gsap.timeline();

tl.fromTo('.textImage', {
    duration: 5,
    smoothOrigin: true,
    scrollTrigger: {
      trigger: '.section',
      start: 'top top',
      end: '+=5000',
      scrub: true,
      markers: true,
      pin: '.section',
    },
});

const marqueeText = document.getElementById("marquee-text");

if (marqueeText) {
    const textWidth = marqueeText.offsetWidth;  // 텍스트의 폭 측정
    const containerWidth = document.getElementById("marquee-container")?.offsetWidth || 0;

    // 마퀴 애니메이션 설정
    gsap.fromTo(marqueeText, 
        { x: containerWidth },  // 텍스트가 오른쪽에서 시작
        { 
            x: -textWidth,      // 텍스트가 왼쪽 밖으로 나가도록 설정
            duration: 10,       // 전체 애니메이션 지속 시간
            ease: "none",       // 일정한 속도로 애니메이션
            repeat: -1,         // 무한 반복
        }
    );
}
