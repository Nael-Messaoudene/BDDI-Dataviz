import { gsap } from "gsap";

var kute = require("kute.js"); //grab the core
require("kute.js/kute-svg"); // Add SVG Plugin

const LoadingScreen = {
    el: document.querySelector('.loading-screen'),
    view1: document.querySelector('.loading-screen_view1'),
    view2: document.querySelector('.loading-screen_view2'),
    view3: document.querySelector('.loading-screen_view3'),

    animateScreens() {
        var tl = gsap.timeline();
        tl.to(this.view2, {x: '-100%', duration: 1, ease: "power1.out"}, 0.5);
        tl.to(this.view3, {y: '-100%', duration: 1, ease: "power1.out"}, 2.5);
        tl.to(this.el, {y: '-100%', duration: 1, ease: "power1.out"}, 4);
    },

    iconsMorphing() {
        const animationDuration = 1000;
        const reduceToSecond = 0.001;

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
        const morph6 = KUTE.fromTo('#cheatfight-1', { path: '#run-1'},{ path: '#fight-1'}, { delay:2000, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph7 = KUTE.fromTo('#cheatfight-2', { path: '#run-2'},{ path: '#fight-2'}, { delay: 2000, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph8 = KUTE.fromTo('#cheatfight-3', { path: '#run-3'},{ path: '#fight-3'}, { delay: 2000, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration}) ;
        const morph9 = KUTE.fromTo('#cheatfight-4', { path: '#run-4'},{ path: '#fight-4'}, { delay: 2000, easing: 'easingCubicInOut',
            showMorphInfo: true, morphPrecision: 1, morphIndex: 127,duration:animationDuration});
        const morph10 = KUTE.fromTo('#cheatfight-5', { path: '#run-5'},{ path: '#fight-5'}, { delay: 2000, easing: 'easingCubicInOut',
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
