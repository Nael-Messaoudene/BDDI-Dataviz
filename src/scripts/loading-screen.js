import gsap from "gsap";

const kute = require("kute.js");
require("kute.js/kute-svg");

const LoadingScreen = {
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
        tl.to(this.main, {scaleY: 0, duration: 1, ease: "expo.out"}, 2);
        tl.to(this.icons, {opacity:0, duration: .3, ease: "expo.out"}, 2);
    },

    iconsMorphing() {
        const animationDuration = 600;
        const reduceToSecond    = 0.001;

        //first morphing
        const morph1 = KUTE.fromTo('#bad-1', { path: '#bad-1'}, { path: '#run-1'},  { easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127, duration: animationDuration});
        const morph2 = KUTE.fromTo('#bad-2', { path: '#bad-2'}, { path: '#run-2'}, { easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph3 = KUTE.fromTo('#bad-3', { path: '#bad-3'},{ path: '#run-3'}, { easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration}) ;
        const morph4 = KUTE.fromTo('#bad-4', { path: '#bad-4'},{ path: '#run-4'}, { easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph5 = KUTE.fromTo('#bad-5',{ path: '#bad-5'}, { path: '#run-5'}, { easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});


        //second morphing
        const morph6 = KUTE.fromTo('#cheatfight-1', { path: '#run-1'},{ path: '#fight-1'}, { delay:900, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph7 = KUTE.fromTo('#cheatfight-2', { path: '#run-2'},{ path: '#fight-2'}, { delay: 900, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph8 = KUTE.fromTo('#cheatfight-3', { path: '#run-3'},{ path: '#fight-3'}, { delay: 900, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration}) ;
        const morph9 = KUTE.fromTo('#cheatfight-4', { path: '#run-4'},{ path: '#fight-4'}, { delay: 900, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph10 = KUTE.fromTo('#cheatfight-5', { path: '#run-5'},{ path: '#fight-5'}, { delay: 900, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});

        morph1.start();
        morph2.start();
        morph3.start();
        morph4.start();
        morph5.start();

        gsap.to('.bad',{display: 'none', delay: animationDuration*reduceToSecond, duration: 0.2});
        gsap.to('.cls-1',{fill: "#64DFC7", delay: animationDuration*reduceToSecond, duration: 0.2});
        gsap.to('.cheatfight', {display: 'block',opacity: 1,delay: animationDuration*reduceToSecond, duration: 0.2});
        gsap.to('.cls-1',{fill: "#FF455E", delay: animationDuration*reduceToSecond+1.9, duration: 0.2});

        morph6.start();
        morph7.start();
        morph8.start();
        morph9.start();
        morph10.start();
    }
};

export default LoadingScreen;
