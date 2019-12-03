import gsap from "gsap";

const KUTE = require("kute.js");
require("kute.js/kute-svg");

const LoadingScreen = {
    body        : document.body,
    main        : document.querySelector('.loading-screen'),
    view1       : document.querySelector('.loading-screen_view1'),
    view2       : document.querySelector('.loading-screen_view2'),
    view3       : document.querySelector('.loading-screen_view3'),
    icons       : document.querySelector('.loading-screen-icons'),
    iconsWrapper: document.querySelector('.loading-screen-icons-wrapper'),

    animateScreens() {
        const tl = gsap.timeline();
        tl.to(this.view2, {scaleX: 1, duration: .6, ease: "expo.out"}, .6);
        tl.to(this.view3, {scaleX: 1, duration: .6, ease: "expo.out"}, 1.5);
        tl.to(this.main, {scaleY: 0, height:0, duration: 1, ease: "expo.out"}, 2);
        tl.to(this.icons, {opacity:0, duration: .3, ease: "expo.out"}, 2);
        tl.to(this.body, {overflow:"initial"}, 3);
    },

    iconsMorphing() {
        const animationDuration = 600;
        const reduceToSecond    = 0.001;

        // BAD to RUN
        for (let i = 1; i <= 5; i++) {
            const morph = KUTE.fromTo(`#bad-${i}`, { path: `#bad-${i}`}, { path: `#run-${i}`},  { easing: 'easingCubicInOut',
                showMorphInfo: true, morphPrecision: 1, morphIndex: 127, duration: animationDuration});
            morph.start();
        }

        // RUN to FIGHT
        for (let i = 1; i <= 5; i++) {
            const morph = KUTE.fromTo(`#cheatfight-${i}`, { path: `#run-${i}`},{ path: `#fight-${i}`}, { delay:900, easing: 'easingCubicInOut',
                showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
            morph.start();
        }

        gsap.to('.bad',{display: 'none', delay: animationDuration*reduceToSecond, duration: 0.2});
        gsap.to('.cls-1',{fill: "#64DFC7", delay: animationDuration*reduceToSecond, duration: 0.2});
        gsap.to('.cheatfight', {display: 'block',opacity: 1,delay: animationDuration*reduceToSecond, duration: 0.2});
        gsap.to('.cls-1',{fill: "#FF455E", delay: animationDuration*reduceToSecond+.9, duration: 0.2});
    }
};

export default LoadingScreen;
