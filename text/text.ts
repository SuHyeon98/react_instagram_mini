import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const tl = gsap.timeline();

//replaces yourElement's text with "This is the new text" 
tl.to('.textImage', {
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
