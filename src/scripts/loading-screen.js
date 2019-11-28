import { gsap, TweenLite } from "gsap";

const LoadingScreen = {
    el: document.querySelector('.loading-screen'),
    view1: document.querySelector('.loading-screen_view1'),
    view2: document.querySelector('.loading-screen_view2'),
    view3: document.querySelector('.loading-screen_view3'),

    animateScreens() {
        var tl = gsap.timeline();
        tl.to(this.view2, {x: '-100%', duration: 1, ease: "power1.out"});
        tl.to(this.view3, {y: '-100%', duration: 1, ease: "power1.out"});
        tl.to(this.el, {opacity: '0', duration: 1, ease: "power1.out"});
    },
};

export default LoadingScreen;
